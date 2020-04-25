const initialState = {
  user: "",
  loading: true
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADDING":
      return {
        ...state,
        user: action.payload
      }
    case "GET_USER":
      console.log(action.payload, "<-------------getting user")
      fetch(`${url}/signin`, {
        method: "POST",
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(action.payload)
      })
        .then((res) => res.json())
        .then((data) => {
          return {
            ...state,
            user: data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
  }
  return state
}
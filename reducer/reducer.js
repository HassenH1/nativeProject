
const initialState = {
  user: "",
  loading: false,
  auth: false
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADDING":
      return {
        ...state,
        user: action.payload
      }
    case "LOADING":
      return {
        ...state,
        loading: action.payload
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
    case "AUTH":
      return {
        ...state,
        auth: action.payload
      }
  }
  return state
}
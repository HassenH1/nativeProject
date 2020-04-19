const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost/saler"

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("connected to mongo")
})

mongoose.connection.on("error", (err) => {
  console.log("failed connection", err)
})
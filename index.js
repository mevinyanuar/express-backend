const express = require('express')
const app = express()
const indexRouter = require("./routes/index")
const newUser = require("./routes/user")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use("/", indexRouter)
app.use("/user", newUser)

app.listen(3421, ()=> console.log('server running on port 3421'))
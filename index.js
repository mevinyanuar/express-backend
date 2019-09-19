const express = require('express')
const app = express()
const indexRouter = require("./routes/index")
const newUser = require("./routes/user")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3421

app.use(bodyParser.urlencoded({extended: false}))

app.use("/", indexRouter)
app.use("/user", newUser)

app.listen(PORT, ()=> console.log('server running on port 3421'))
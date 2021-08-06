const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoute = require('./routes/user')
const app = express()
const port = 3000

// CONNECTION TO DATABASE
mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', ()=>{
    console.log("Couldn't connect to database.Something went wrong.")
})
db.once('open', ()=>{
    console.log('Connected successfully to database!')
})

// MIDDLEWARE
app.use(express.static('public'))

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// ROUTING
app.use('/', userRoute)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
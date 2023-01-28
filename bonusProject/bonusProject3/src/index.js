const express = require('express')
const app = express()
const route = require('./route/route')
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect("mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/bonusProject3",{useNewUrlParser: true})
.then(()=> console.log("MongoDb is connected"))
.catch((err)=>{console.log(err)})

app.use('/',route)
app.listen(3000, function(){
    console.log("Express listen on port "+ 3000)
})
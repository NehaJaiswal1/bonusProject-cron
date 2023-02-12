
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require('./route/route')


app.use(express.json());


mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/bonusProject5", {
    useNewurlParser: true
})
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(3000, function () {
    console.log("Express app running on port " + (3000))
});























































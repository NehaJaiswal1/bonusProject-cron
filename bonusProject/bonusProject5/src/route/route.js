const express = require('express');

const router = express.Router();
const cron = require('node-cron');

const moment = require('moment')
moment.suppressDeprecationWarnings = true;

let eventArray = [];

router.post('/schedule', async function(req,res){
    let data = req.query;
    let {text,dateTime} = data;

 eventArray.push({"text":text,"dateTime":{
    sec: dateTime.substring(17,19),
    min: dateTime.substring(14,16),
    hour: dateTime.substring(11,13),
    year : dateTime.substring(0,4),
    month: dateTime.substring(5,7),
    date: dateTime.substring(8,10)
}});

eventArray.forEach(x=>{
     cron.schedule(`${x.dateTime.sec} ${x.dateTime.min} ${x.dateTime.hour} ${x.dateTime.date} ${x.dateTime.month} `,function(){console.log(x.text)})
    })
console.log(eventArray)
 res.send(eventArray);
});

module.exports = router
Problem Statement

Hint:You Will have to Self Explore cron jobs in Nodejs,For this Assignment
Build a scheduler in JS with NodeJS framework and a script to run it for 10 events.
The event will consist of a text (string) and a date time at which it will run.
The scheduler must schedule the event to trigger a function at the date time mentioned in the event body.
The trigger function (API) must accept the text as input, sleep for the duration of text length and return text backwards.
Example
Let say list of events is
[
            	{
                            	“text”: “textOne”,
                            	“dateTime”: “2020-07-10 15:00:00.000”
},
{

“text”: “textTwo”,
                            	“dateTime”: “2020-07-15 14:00:00.000”
},
{
                            	“text”: “textFinal”,
                            	“dateTime”: “2020-07-15 15:00:00.000”
}

// init calendar
scheduler.init('scheduler_here', new Date(),"month");

// Create an array of demo events
var events = [
   {id:1, text:"Computer Club Meeting", start_date:"09/13/2023 14:00",end_date:"09/13/2023 17:00"},
   {id:2, text:"Weekend Retreat",start_date:"09/16/2023 12:00",end_date:"09/18/2023 19:00"},
   {id:3, text:"Kayaking Trip", start_date:"09/17/2023 09:00",end_date:"09/17/2023 10:00"}
];

// Parse the array of demo events to load data into the calendar
// This will be loaded from the server later
scheduler.parse(events, "json");
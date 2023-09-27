// link to mongodb online server 
// mongodb+srv://eldeaygo:<password>@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eldeaygo:<password>@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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
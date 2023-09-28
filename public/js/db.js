// link to mongodb online server 
// mongodb+srv://eldeaygo:<password>@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eldeaygo:Testing123@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority";

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


async function checkUser(username, password) {
    try {
      const database = client.db("CNT3104"); // Replace with your actual database name
      const usersCollection = database.collection("users"); // Replace with your actual collection name
  
      // Find a user with the provided username and password
      const user = await usersCollection.findOne({username, password});
  
      if (user) {
        console.log("User found:", user);
      } else {
        console.log("User not found");
        console.log(await usersCollection.find({}).toArray())
      }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
  }

checkUser('johndoe', 'Testing123');

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Define routes and middleware here

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.post(uri, (req, res) => {
//     const { username, password } = req.body;
  
//     // Find a user with the provided username and password
//     const user = users.find(u => u.username === username && u.password === password);
  
//     if (!user) {
//       return res.status(401).send('Invalid username or password');
//     }
  
//     return res.status(200).send('Login successful');
//   });
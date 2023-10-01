// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to your MongoDB database
// mongoose.connect('mongodb://localhost:27017/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const User = require('./userModel');

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Check if the user exists
//   User.findOne({ username, password }, (err, user) => {
//     if (err) {
//       return res.status(500).send('Internal Server Error');
//     }

//     if (!user) {
//       return res.status(401).send('Invalid username or password');
//     }

//     return res.status(200).send('Login successful');
//   });
// });

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://eldeaygo:Testing123@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// async function checkUser(username, password) {
//   try {
//     const database = client.db("CNT3104"); // Replace with your actual database name
//     const usersCollection = database.collection("users"); // Replace with your actual collection name

//     // Find a user with the provided username and password
//     const user = await usersCollection.findOne({username, password});
//       if (user) {
//         console.log("User found:", user);
//         window.location.href = 'user.html';
//       } else {
//         alert("User not found");
//       }
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//       }
//   }
const express = require('express');
const bodyParser = require('body-parser');
const checkUser = require('./server');

const app = express();
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await checkUser(username, password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const User = require('./userModel');

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    return res.status(200).send('Login successful');
  });
});

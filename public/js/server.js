const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eldeaygo:Testing123@cnt3104.rwqw5ty.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function checkUser(username, password) {
    try {
        await client.connect();
        const database = client.db("CNT3104");
        const usersCollection = database.collection("users");
        const user = await usersCollection.findOne({ username, password });

        return user;
    } finally {
        await client.close();
    }
}

module.exports = checkUser;
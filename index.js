const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config()
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors());

/**
 * Database configuration start
 */


const uri = `mongodb+srv://${process.env.mongodbUser}:${process.env.mongodbPassword}@cluster0.x5isz8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const sellerCollection = client.db('bestOneDB').createCollection('seller')

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();

    app.post('/sellerregistration', async (req, res)=>{
        const user = req.body;
        console.log(user)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

/**
 * Database configuration end
 */



app.get('/', (req, res) =>{
    res.send("Best One Server is Running")
})
app.listen(port, ()=>{
    console.log(`Best One server is running on port ${port}`)
})
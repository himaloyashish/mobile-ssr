require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.Port || 5000;

app.get(express.json())
app.get(cors())





const uri = `mongodb+srv://${process.env.DOOR_NAME}:${process.env.DOOR_PASS}@cluster0.6ogtg9l.mongodb.net/?retryWrites=true&w=majority`;

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
        // Send a ping to confirm a successful connectionj

        const mobileDbCollection = client.db("MobileDoor").collection("mobile");


        app.get('/mobil/:text', async (req, res) => {
      
            const indexKeys = { name: 1, type: 1, price: 1, processor:1, memory:1, os:1,  }
            const indexOption = { name: 'Toy_NameSubCategory' }
            const ok = await toyAddCollection.createIndex(indexKeys, indexOption)
      
            const searchText = req.params.text
            const result = await mobileDbCollection.find({
              $or: [
                { name: { $regex: searchText, $options: 'i' } },
                { type: { $regex: searchText, $options: 'i' } },
                { price: { $regex: searchText, $options: 'i' } },
                { processor: { $regex: searchText, $options: 'i' } },
                { memory: { $regex: searchText, $options: 'i' } },
                { os: { $regex : searchText, $options: 'i' } },
              ]
            }).toArray()
            res.send(result)
          })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);










app.get('/', (req, res) => {
    res.send("The mobile door app is on mood")
})

app.listen(port, () => {
    console.log(`The mobile door app is running on port ${port}`);
})
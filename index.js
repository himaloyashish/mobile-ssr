require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.Port || 5000;

app.get(express.json())
app.get(cors())

app.get('/', (req, res)=>{
    res.send("The mobile door app is on mood")
})

app.listen(port, ()=>{
    console.log(`The mobile door app is running on port ${port}`);
})
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
require('dotenv').config()

// Get Information
router.get('/', async (req, res) => {
    const posts = await loadCollection();
    res.send(await posts.find({}).toArray());
});

async function loadCollection() {
    const client = await mongodb.MongoClient.connect(
        process.env.DB_CONNECTION, {
        useNewUrlParser: true
    }
    );
    return client.db('MajorsInfo').collection('Majors');
}
module.exports = router;
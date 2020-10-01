const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get Information
router.get('/', async (req, res) => {
    const posts = await loadCollection();
    res.send(await posts.find({}).toArray());
});

async function loadCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://TeamVI:1234@teamvi.sqhgs.mongodb.net/TeamVI?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }
    );
    return client.db('MajorsInfo').collection('Majors');
}
module.exports = router;
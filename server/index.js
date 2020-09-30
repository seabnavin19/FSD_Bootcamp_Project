const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const Information = require('./routes/api/Information');

app.use('/api/MajorsInfo', Information);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));


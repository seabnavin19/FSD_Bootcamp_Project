const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(bodyParser.json());
app.use(cors());

//http://localhost:4000/api/MajorsInfo
const Information = require('./routes/api/Information');

app.use('/api/MajorsInfo', Information);

//Handle production
if (process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname + '/public/'))

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname , '/public/index.html')))

}

//Port 4000
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));


var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
const express = require('express')
const app = express()
const ngrok = require('ngrok');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.post('/', (req, res) => {
    
    res.send('Hello World')
    console.log(req.body.queryResult.parameters);
    res.send('8585')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

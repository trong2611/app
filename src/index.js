const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.send('hello')
})
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
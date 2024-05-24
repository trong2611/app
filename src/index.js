const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webRoutes = require('./routes/api');
const configViewEngine = require('./config/viewEngine');
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv').config();
const CountryService = require('./services/CountryService');
const StateService = require('./services/StateService');

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);
app.use('/api',webRoutes);

const getData = async () => {
    let data = await StateService.getAllState();
    return data
}

app.use('/', async (req, res) => {
    let d = await getData()
    console.log(d);
    res.send('Get success'+ JSON.stringify(d))
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webRoutes = require('./routes/api');
const configViewEngine = require('./config/viewEngine');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);
app.use('/api',webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
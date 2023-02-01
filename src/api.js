const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app)
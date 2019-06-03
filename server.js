const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();


//API file for intracting with MongoDb
const api = require('./server/routes/api');

//Parsers

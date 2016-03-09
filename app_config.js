'use strict'

//DEPENDENCIAS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// ALLOW CORS
const allowCors = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '127.0.0.1:5000, 192.168.0.110');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	
	next();
}

//CONFIG EXPRESS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(allowCors);
app.use('/', routes);

app.set('view engine', 'jade');

module.exports = app;

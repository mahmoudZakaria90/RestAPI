//Express app
const express = require('express');

//Mongoose
const mongoose = require('mongoose');

//Middleware
const bodyParser = require('body-parser');
const cors = require('cors');

//Setup the app
const app = express();

//Connect to Mongodb
mongoose.connect('mongodb://localhost/ninjawy');﻿
mongoose.Promise = global.Promise;

//Body parser
app.use(bodyParser.json());

//Cors
app.use(cors())

//app Routes
app.use('/api', require('./routes'));

//Error Handling
app.use(function(err, req, res, next) {
    res.status(422).send({
        error: err.message
    })
})

//Setup the server
app.listen(process.env.port || 4000, function(){
    console.log('Listening!')
})

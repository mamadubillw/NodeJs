const express = require('express');
const app  = express();
var bodyParser = require("bodyParser");

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(re, res){
        
})
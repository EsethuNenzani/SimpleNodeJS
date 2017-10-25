const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const mongoose= require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
const db=mongoose.connection;

//var for home page
app.get('/', function(req, res){
    res.send('Please use the /api/books or /api/genres');
});
app.listen(3001);





var express = require('express');
var path= require('path');
var bodyParser= require('body-parser');

var index= require('./routes/index');
var tasks= require('./routes/tasks');

var port= 3001;

var app= express();

//view engine
app.set('views', path.join(__dirname, 'views')); //our views
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client'))); //our angular 2 stuff!!

//body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});

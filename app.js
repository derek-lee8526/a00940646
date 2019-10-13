var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/lab5.html'))
})

app.use(express.static(path.join(__dirname, 'public')));


app.post('/lab5', urlencodedParser, function(req,res) {
    console.log(req.body)

    // res.send("You sent the name " + req.body.name + '.')
})

app.listen(3000);
console.log('server start')
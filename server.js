var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



let artistData = [];


app.get('/', function (req, res) {
    if(fs.existsSync("./artist.json")) {
        let jsonData = require('./artist.json')
        console.log(jsonData[0])
    }

    res.sendFile( __dirname + "/" + "lab5.htm" );
 })


app.post('/lab5', urlencodedParser, function(req,res) {
    artist = {
        name: req.body.name,
        about: req.body.about,
        image: req.body.img
    }
    artistData.push(artist)
    fs.writeFileSync('./artist.json', JSON.stringify(artistData, null ,2), (err) => {
        if(!err) {
            console.log("finish")
        }
    })
    res.status(204).send();
})

app.listen(80);
console.log('server start')
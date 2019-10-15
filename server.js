var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
const expressHbs = require('express-handlebars');

var app = express();
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/',
      defaultLayout: 'lab5',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));



let artistData = [];


// app.get('/', function (req, res) {
//     if(fs.existsSync("./artist.json")) {
//         let jsonData = require('./artist.json')
//         artistData.push(jsonData)
//         console.log(jsonData)
//         console.log(artistData)
//     }
//     res.sendFile( __dirname + "/" + "lab5.htm" );
//     })


 app.get('/', function (req, res) {
    // res.render('lab5' , {artist: [
    //                                   {'name': 'Roy', 'about': '2019 Hottest Star', 'imageUrl':'https://randomuser.me/api/portraits/med/men/1.jpg' },
    //                                   {'name': 'Kevin', 'about': 'Best in town', 'imageUrl':'https://randomuser.me/api/portraits/med/men/2.jpg' },
    //                                   {'name': 'Joe', 'about': 'Rising star', 'imageUrl':'https://randomuser.me/api/portraits/med/men/3.jpg' }
    //                                 ] });
    // res.render('lab5' , {artist: './artist.json' });
    if(fs.existsSync('./artist.json')) {
        let jsonData = require('./artist.json')
        res.render('lab5', {artist:jsonData})
    }   
  });

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

app.listen(3000);
console.log('server start')
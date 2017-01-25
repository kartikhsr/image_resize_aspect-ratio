var express = require('express');
var http = require('http');
var app = express();
var bodyParser=require('body-parser'); 
var route=require('./ro');
var link=null;
	
		var multer  =   require('multer');

		var storage = multer.diskStorage({
	  		destination: function (req, file, cb) {
	    	cb(null, '/home/kartik/Documents/HTML/Cardekho/image_resize/data');
	 	 },
	 		filename: function (req, file, cb) {
	    	cb(null, file.originalname);
	        }
		})
	var upload = multer({ storage: storage,keepExtensions: true});
	/*console.log(upload);*/

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
http.createServer(app).listen(3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('converted_resize'));

app.get('/',route.index);
app.post('/upload',upload.single('uploadFile'),route.uploading);
app.post('/downloadit',route.download);


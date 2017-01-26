	exports.index = function(req, res) {
	    res.render('image-resize',{rpath:"",cpath:"",dest1:""});
	};
	exports.uploading = function(req, res) { 

			if(req.body.resize=='resize')
					
					resize(req, function(pPath,dest12){

						
					res.render('image-resize', {rpath: pPath, cpath: "",dest1:dest12});
				});
			else if(req.body.resize=='aspect')	
					aspect(req, function(webpPath,dest12){
					res.render('image-resize', {rpath:"", cpath: webpPath,dest1:dest12})
				});
			}
	exports.download = function(req, res) {
		res.download(req.body.path);
	};
		var resize=function(req,cb){
	
		var path=req.file.path;
		var easyimg=require('easyimage');
		var dest='/home/kartik/Documents/HTML/cardekho/converted_resize/';
		var destPath=dest+path.substring(42);
		var dest3=path.substring(42);

		easyimg.resize({
			width:req.body.width,
			height:req.body.height,
			src:path,
			dst:destPath,
			ignoreAspectRatio:false,
			x:0, y:0
		}).then(function(image){
			cb(destPath,dest3);
		});
	};

		var rescrop=function(req,cb){
			var path=req.file.path;
			var easyimg=require('easyimage');
			var dest='converted_resize/';
			var destPath=dest+path.substring(42);
			var dest3=path.substring(42);

			easyimg.rescrop({src:path, dst:destPath,
    		width:req.body.width, height:req.body.height,
     		cropwidth:req.body.cwidth, cropheight:req.body.cheight,
     		}).then(function(image){
     			cb(destPath,dest3);
     		});
    	};

		var aspect=function(req,cb){
			var path=req.file.path;
			var easyimg=require('easyimage');
			var dest='converted_aspect/';
			var destPath=dest+path.substring(42);
			var dest3=path.substring(42);
		
			easyimg.crop({
			src:path,
			dst:destPath,
			cropwidth:req.body.cwidth,
			cropheight:req.body.cheight,
			x:0,y:0,ignoreAspectRatio:false

		}).then(function(image){
			cb(destPath,dest3);
		});
	};
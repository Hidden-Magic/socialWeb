const Express=require("express");
const Parser=require("body-parser");
const Path=require("path");

var App=Express();

App.use(Parser.json()); //recibir datos en formato json
App.use(Parser.urlencoded({
	extended:true
})); // Recibir datos codificados

App.use(Express.static(Path.join( __dirname ,"public")));

//END POINTS*******
App.post("/loadProfile",function(req,res){
 var imagen="<img src='' alt='imagen' class='bordes'>"
 res.json({
 	im:imagen
 });
});

App.post("/especif",function(req,res){
 var imagen="<img src='' alt='imagen' class='bordes'>";

	res.json({
 		im:imagen
	});
});

App.post("/reading",function(req,res){
	var imagen="<img src='' alt='imagen' class='bordes'>";
	res.json({
		im:imagen
	});
});

// listen
App.listen(process.env.PORT||3000,function(){
	console.log("escuchando desde 3000");
});
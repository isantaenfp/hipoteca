//jshint esversion:6
//Inicializo los módulos que instalé con npm

//1. Express
const express=require("express");
const app=express();
app.use(express.static("public"));

//2. body-parser
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//Zona de enrutamientos
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});


//3. Pongo a escuchar el server
app.listen(3000,function(){
  console.log("Estoy escuchando en el puerto 3000");
});

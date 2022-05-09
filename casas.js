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

app.post("/",function(req,res){
  //Recojo los datos del Formulario
  var tipoVivienda=req.body.tipoVivienda;
  var annos=req.body.annos;
  var interes=Number(req.body.interes);


  var precioVivienda;
  switch (tipoVivienda) {
    case "piso":
      precioVivienda=180000;
      break;
    case "chalet":
      precioVivienda=300000;
      break;
    case "duplex":
      precioVivienda=220000;
      break;
  } //Fin del switch
  //Calculo la cuota mensual
  var meses=annos*12;
  var cuota=precioVivienda/((1-Math.pow(1+interes,-meses))/interes);

  //Envio el resultado al navegador
  res.send("<h1>La cuota mensual es: "+cuota.toFixed(2)+"€</h1>");
});

//3. Pongo a escuchar el server
app.listen(3000,function(){
  console.log("Estoy escuchando en el puerto 3000");
});

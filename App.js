//Requrimiento de modulos
const express = require('express')
const hbs = require('hbs');
const bodyParser = require("body-parser")
const dbManager = require('./app/models/dbManager');
const path = require('path');
const config = require('./config/Config.js');
const middleware = require('./extras/middleware.js');

//Creacion de la App express 
const app = express();
const port = config.port; 

//Body parser para convertir el body en peticiones automaticamente a objetos
app.use(bodyParser.urlencoded({
  extended:true
})); 

//#################################
//HandeBars
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname + "/views"));
//#################################

//Carpeta publica de recurso
app.use(express.static(path.join(__dirname + "/public")));


//#################################
//Camino de las rutas
const personal = require('./app/routes/personal');
const auth = require('./app/routes/auth');
const error404 = require('./app/routes/error404');

//Se inician las rutas con el controlador
app.use('/personal',middleware.ensureAuthenticated, personal);
app.use('/auth', auth);
app.use(error404);
//#################################


//Ruta default
app.get('/inicio', async (req, res) => {
    res.render('inicio', {})
})


app.get('/formulario', async (req, res) => {
  res.render('formulario', {})
})

//Ruta unicamente accesible si esta autenticado
app.get('/private',middleware.ensureAuthenticated, function(req, res) {
  console.log("Id: "+req.user);
} );

//Inicio de aplicacion escuchando 
app.listen(port, () => {
  dbManager.testConnection();
  console.log(`Escuchando en el puerto ${port}`)
})
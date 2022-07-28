//Requerimiento de modulos
const express = require('express')
const hbs = require('hbs');
const bodyParser = require("body-parser")
const dbManager = require('./app/models/dbManager');
const path = require('path');
const config = require('./config/Config.js');
const middleware = require('./extras/middleware.js');

//creacion de la aplicacion express 
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
const index = require('./app/routes/index');

//Se inician las rutas con el controlador
app.use('/personal',middleware.ensureAuthenticated, personal);
app.use('/auth', auth);
app.use('/inicio', index);

app.get('/formulario', async (req, res) => {
  res.render('formulario', {})
})

app.use(error404);
//#################################

//Inicio de aplicacion escuchando 
app.listen(port, () => {
  dbManager.testConnection();
  console.log(`Escuchando en el puerto ${port}`)
})
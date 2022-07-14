//Requrimiento de modulos
const express = require('express')
const hbs = require('hbs');
const bodyParser = require("body-parser")
const dbManager = require('./models/dbManager.js');
const path = require('path');
const config = require('./config/Config.js');

//Creacion de la App express
const app = express();
const port = config.port;

//Body parser para convertir el body en peticiones automaticamente a objetos
app.use(bodyParser.urlencoded({
  extended:true
})); 

//Seteo de rutas y motor de plantillas Handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

//Seteo de la carpeta publica de recursos
app.use(express.static(__dirname + "/public"));

// Rutas de autenticación y login
//router.post('/auth/signup', auth.emailSignup);
//router.post('/auth/login', auth.emailLogin);

//Rutas a utilizar
const personal = require('./routes/personal');
const auth = require('./routes/auth');

app.use('/personal', personal);
app.use('/auth', auth);

//Ruta default
app.get('/inicio', async (req, res) => {

    res.render('inicio', {})
})

app.get('/formulario', async (req, res) => {

  res.render('formulario', {})
})

//Inicio de aplicacion escuchando
app.listen(port, () => {
  dbManager.testConnection();
  console.log(`Escuchando en el puerto ${port}`)
})
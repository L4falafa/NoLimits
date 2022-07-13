// auth.js
const dbManager = require('../models/dbManager.js');
const express = require('express');
const router = express.Router();
const service = require("../extras/services.js");


router.post('/signup', async function  (req, res)  {
  const { email, password } = req.body;
  var user = await dbManager.mySqlQueryAsync("SELECT * FROM usuarios WHERE email = "+"'"+email+"'");
  if(user.length != 1){
    res.send("No existe este usuario con el mail")
    console.log("No existe este usuario con el mail")
  }
  else{
    res.send("Existe un usuario con ese nombre")
    console.log("Existe un usuario con ese nombre") 
  }
     
  //dbManager.mySqlQueryAsync("INSERT INTO `usuarios` (`_id`, `tipo_documento`, `num_documento`, `apellido`, `nombre`, `pais`, `provincia`, `localidad`, `direccion`, `codigopostal`, `telefono`, `email`, `password`, `nivel_de_usuario`) VALUES (NULL, '', '', '', '', '', '', '', '', '', '', 'rotttomas@gmail.com', 'rotapete', '');")
});

router.get('/login', function(req, res) {
  res.send('login');
});


emailSignup = function (req, res) {
    
    user.save(function (err) {
      return res.status(200).send({ token: service.createToken(user) });
    });
  },
  emailLogin = function (req, res) {
    User.findOne({ email: req.body.email.toLowerCase() }, function (err, user) {
      // Comprobar si hay errores
      // Si el usuario existe o no
      // Y si la contraseña es correcta
      return res.status(200).send({ token: service.createToken(user) });
    });
  }

module.exports = router;
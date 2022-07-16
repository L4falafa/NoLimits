// auth.js
const dbManager = require('../models/dbManager.js');
const express = require('express');
const router = express.Router();
const service = require("../extras/services.js");


router.post('/signup', async function  (req, res)  {
  const { email, password } = req.body;
  var user = await dbManager.mySqlQueryAsync("SELECT * FROM usuarios WHERE email = "+"'"+email+"'");
  //Si no existe el usuario crea la cuenta
  if(user.length != 1){
    console.log("Se creo un usuario con el email: "+email)
    //Inserta el usuario a la db
    await dbManager.mySqlQueryAsync("INSERT INTO `usuarios` (`_id`, `tipo_documento`, `num_documento`, `apellido`, `nombre`, `pais`, `provincia`, `localidad`, `direccion`, `codigopostal`, `telefono`, `email`, `password`, `nivel_de_usuario`) VALUES (NULL, '', '', '', '', '', '', '', '', '', '', '"+email+"', '"+password+"', '');")
    
    user = await dbManager.mySqlQueryAsync("SELECT * FROM usuarios WHERE email = "+"'"+email+"'");
    //Devuelve el token
    res.status(200).send({ token: service.createToken(user[0]) });
  }
  else{
    res.send("Existe un usuario con ese nombre")
    console.log("Existe un usuario con ese nombre") 
  }
     
  
});

router.post('/login', async function(req, res) {
  const { email, password } = req.body;
  //const {authorization} = req.headers;
   
  var user = await dbManager.mySqlQueryAsync("SELECT * FROM usuarios WHERE email = "+"'"+email+"' AND password = "+"'"+password+"' ");
  //Si existe el usuario se loguea
  if(user.length == 1){
    console.log("Logged");
    res.status(200).send({ token: service.createToken(user[0]) });
  }
  else{
    res.send("Contraseña o email incorrecto")
    console.log("Contraseña o email incorrecto") 
  }

});

module.exports = router;
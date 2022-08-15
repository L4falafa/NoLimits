//Controlador login y signup
const service = require("../../extras/services");
const dbManager = require('../models/dbManager.js');

module.exports = {
    //################# LOGIN #################
    //Busca en la base de datos si existe el usuario y si la contraseña es correcta si es asi devuelve un token
    login: async (req,res) => {
        const { email, password } = req.body;
         
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
    },

    //########## SIGNUP ################
    //Recibe los datos del usuario y los guarda en la base de datos
    signup: async  (req, res)  => {
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
                  
      }
};
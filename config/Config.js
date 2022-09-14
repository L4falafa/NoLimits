let config = {
    //Token Secreto
    TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto",
    //Configuracion para la conexion a la DB Mysql
    databaseMySql:{
        host: "localhost",
        user: "root",
        database: "inetbeeacons"        
    },
    //Puerto de la aplicacion express
	port: 3000,
    //Datos del servidor de ejecucion formato fecha,hora y lenguaje 
	language: "es",
	timeFormat: 24
};

module.exports = config;
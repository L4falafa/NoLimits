let config = {
    //Configuracion para la conexion a la DB Mysql
    databaseMySql:{
        host: "localhost",
        user: "root",
        database: "nolimits"        
    },
    //Puerto de la aplicacion express
	port: 3000,
    //Datos del servidor de ejecucion formato fecha,hora y lenguaje 
	language: "es",
	timeFormat: 24
};

if (typeof module !== "undefined") {module.exports = config;}
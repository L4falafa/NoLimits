//reservas.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "reservas";

//Exportar modulo
module.exports = {
    getReserva: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeReserva: async (id) => dbManager.deleteFromTable(tableName, id),
    addReserva: async ( num_documento, apellido_visitante, nombre_visitante, email_visitante, id_visita) => {
        files = ["num_documento", "apellido_visitante", "nombre_visitante", "email_visitante", "id_visita"];
        values = [num_documento, apellido_visitante, nombre_visitante, email_visitante, id_visita];

        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    }, 
    modifyReserva: async (campo, dato, id) => dbManager.updateTable(tableName, [campo], [dato], id),
}
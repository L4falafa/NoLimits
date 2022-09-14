//visitas.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "visitas";

//Exportar modulo
module.exports = {
    getVisita: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeVisita: async (id) => dbManager.deleteFromTable(tableName, id),
    addVisita: async ( id_guia, nombre, descripcion, fecha) => {
        fields = ["id_guia", "nombre", "descripcion", "fecha"];
        values = [id_guia, nombre, descripcion, fecha];
        
        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    },
    modifyVisita: async (campo, dato, id) => {
    dbManager.updateTable(tableName, [campo], [dato], id);
    },
}
//exposiciones.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "exposiciones";

//Exportar modulo
module.exports = {
    getExposicion: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeExposicion: async (id) => dbManager.deleteFromTable(tableName, id),
    addExposicion: async (nombre, autor, fecha, descripcion, id_sala ) => {
        fields = ["nombre", "autor", "fecha", "descripcion", "id_sala"];
        values = [nombre, autor, fecha, descripcion, id_sala];
        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    },
    modifyExposicion: async (campo, dato, id) => {
    dbManager.updateTable(tableName, [campo], [dato], id);
    },
}
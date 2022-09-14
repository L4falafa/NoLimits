//guias.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "exposiciones";

//Exportar modulo
module.exports = {
    getGuia: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeGuia: async (id) => dbManager.deleteFromTable(tableName, id),
    addGuia: async (nombre, apellido, numDocumento ) => {
        fields = ["nombre", "apellido", "num_documento"];
        values = [nombre, apellido, numDocumento];
        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    },
    modifyGuia: async (campo, dato, id) => {
    dbManager.updateTable(tableName, [campo], [dato], id);
    },
}
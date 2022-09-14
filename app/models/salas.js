//salas.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "salas";

//Exportar modulo
module.exports = {
    getSala: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeSala: async (id) => dbManager.deleteFromTable(tableName, id),
    addSala: async (imagen) => {
        //TODO Utilizar longblob o link de imagenes a analizar
        fields = ["imagen_plano"];
        values = [imagen];
        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    },
    //TODO
    modifySala: async (campo, dato, id) => {
    dbManager.updateTable(tableName, [campo], [dato], id);
    },
}
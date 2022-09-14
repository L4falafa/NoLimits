//exposiciones.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const dbManager = require('./dbManager.js');


const tableName = "beacons";

//Exportar modulo
module.exports = {
    getBecons: async (id)=> dbManager.getRowFromTable(tableName, id),
    removeBeepcon: async (id) => dbManager.deleteFromTable(tableName, id),
    addBeepcon: async (id,  id_exposicion ) => {
        fields = ["id", "id_exposicion"];
        values = [id, id_exposicion];
        try {
            return await dbManager.insertIntoTable(tableName, fields, values);
        }
        catch (error) {
            return error;
        }
    },
    modifyBeepcon: async (id, id_exposicion) => {
        fields = ["id_exposicion"];
        values = [id_exposicion];
        dbManager.updateTable(tableName, fields, values, id);
    },
}
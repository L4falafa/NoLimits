//dbManager.js
//Se encarga del manejo de la base de datos actualmente usando MySql
const { query } = require('express');
const mysql = require('mysql');
const config = require('../../config/Config');

//Configuracion de la base de datos por el archivo Config.js
var con = mysql.createConnection({
    host: config.databaseMySql.host,
    user: config.databaseMySql.user,
    database: config.databaseMySql.database
});

//Making MySql query async
async function mySqlQueryAsync (query){
    var result =await new Promise((resolve, reject) => {

        con.query(query, function (err, result, fields) {
            if (err) reject(err);
            resolve(result);
          });
          
    })
    return result;
}

//Exportar modulo
module.exports = {
    testConnection: ()  => {
        try {
            con.connect(function() {
                console.log("Connected to the database: "+ config.databaseMySql.host);
              }); 
        } catch (error) {
            console.log(error);
        }
        
    },
    getAllFromTable: async (tableName)=>{
        qry = "SELECT * FROM "+tableName;
        try {
            return await mySqlQueryAsync(qry);
        } catch (error) {
            return error;   
        }
    },
    getRowFromTable: async (tableName, id)=>{
        qry = "SELECT * FROM "+tableName+" WHERE id = "+id;
        try {
            return await dbManager.mySqlQueryAsync(qry);
        } catch (error) {
            return error;   
        }
    },
    
    /**
    * Select fields passed by a array from a selected table from the database.
    * 
    * @param {string} tableName - The table name
    * @param {Array} fields - The fields to select
    */
    getFieldsFromTable: async (tableName, fields)=>{

        qry = "SELECT ";
        try {
            //Add each field to the query string
            if(fields.length > 1){
                for (let index = 0; index < fields.length; index++) {
                    var x = fields[index];
                    if(index!=fields.length-1)
                        qry+= x+","
                    else
                        qry+= x    
                }    
    
            }else qry+= fields[0]
            qry += " FROM "+tableName
            //returns the result
            return await mySqlQueryAsync(qry);
        } catch (error) {
            
            return error;
        }
    },
    deleteFromTable: async (tableName, id)=>{
        qry = "DELETE FROM "+tableName+" WHERE id = "+id;
        try {
            return await mySqlQueryAsync(qry);
        } catch (error) {
            return error;
        }
    },
    insertToTable: async (tableName, fields, values)=>{
        qry = "INSERT INTO "+tableName+" (";
        try {
            //Add each field to the query string
            if(fields.length > 1){
                for (let index = 0; index < fields.length; index++) {
                    var x = fields[index];
                    if(index!=fields.length-1)
                        qry+= x+","
                    else
                        qry+= x
                }
            }else qry+= fields[0]
            qry += ") VALUES (";
            //Add each value to the query string
            if(values.length > 1){
                for (let index = 0; index < values.length; index++) {
                    var x = values[index];
                    if(index!=values.length-1)
                        qry+= "'"+x+"',"
                    else
                        qry+= "'"+x+"'"
                }
            }else qry+= "'"+values[0]+"'"
            qry += ")";
            //returns the result
            return await mySqlQueryAsync(qry);
        } catch (error) {
            return error;
        }
    },
    updateTable: async (tableName, id, fields, values)=>{
        qry = "UPDATE "+tableName+" SET ";
        try {
            //Add each field to the query string
            if(fields.length > 1){
                for (let index = 0; index < fields.length; index++) {
                    var x = fields[index];
                    if(index!=fields.length-1) 
                        qry+= x+"='"+values[index]+"',"
                    else
                        qry+= x+"='"+values[index]+"'"
                }
            }else qry+= fields[0]+"='"+values[0]+"'"
            qry += " WHERE id = "+id;
            //returns the result
            return await mySqlQueryAsync(qry);
        } catch (error) {
            return error;
        }
    },
    mySqlQueryAsync: async (query) => { return await mySqlQueryAsync(query) }
}
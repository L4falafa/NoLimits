//guias.js
//Controlador login y signup
const service = require("../../extras/services");
const guias = require("../models/guias");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('guias', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        guias.getGuia(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });

    },
    add: (req, res) => {
        //POST
        //Adds to the the table guias the new guia
        const { nombre, apellido, telefono, num_documento} = req.body;
        
        //Send response
        guias.addGuia(nombre, apellido, telefono, num_documento).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
        
    },
    remove: (req, res) => {
        //POST
        //Removes from the table guias the guia
        const { id} = req.body;

        //Send response
        guias.removeGuia(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table guias the guia
        const { id, campo, dato} = req.body;

        //Send response
        guias.modifyGuia(campo, dato, id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
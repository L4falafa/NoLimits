//exposiciones.js
//Controlador login y signup
const service = require("../../extras/services");
const exposiciones = require("../models/exposiciones");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('exposiciones', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        exposiciones.getExposicion(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });

    },
    add: (req, res) => {
        //POST
        //Adds to the the table exposiciones the new exposition
        const { nombre, autor, fecha, descripcion, id_sala} = req.body;
        
        //Send response
        exposiciones.addExposicion(nombre, autor, fecha, descripcion, id_sala).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    remove: (req, res) => {
        //POST
        //Removes from the table exposiciones the beepcon
        const { id} = req.body;
        
        //Send response
        exposiciones.removeExposicion(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table exposiciones the beepcon
        const { id, campo, dato} = req.body;

        //Send response
        exposiciones.modifyExposicion(id, campo, dato).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
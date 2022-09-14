//beepcons.js
//Controlador login y signup
const service = require("../../extras/services");
const salas = require("../models/salas");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('salas', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        salas.getSala(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });


    },
    add: (req, res) => {
        //POST
        //Adds to the the table salas the new sala, imagen_plano, sala
        const { imagen_plano, sala} = req.body;

        //Send response
        salas.addSala(imagen_plano, sala).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    remove: (req, res) => {
        //POST
        //Removes from the table salas the sala
        const { id} = req.body; 

        //Send response
        salas.removeSala(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table salas the sala
        const { campo, dato, id} = req.body;

        //Send response
        salas.modifySala(campo, dato, id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
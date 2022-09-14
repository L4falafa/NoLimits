//visitas.js
//Controlador login y signup
const service = require("../../extras/services");
const visitas = require("../models/visitas");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('visitas', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        visitas.getBecons(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });

    },
    add: (req, res) => {
        //POST
        //Adds to the the table visitas the new Visita
        const { id, id_guia, nombre, descripcion, fecha} = req.body;

        //Send response
        visitas.addVisita(id, id_guia, nombre, descripcion, fecha).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
        
    },
    remove: (req, res) => {
        //POST
        //Removes from the table visitas the Visita
        const { id} = req.body;
        
        //Send response
        visitas.removeVisita(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table visitas the Visita
        const { id, id_exposicion} = req.body;

        //Send response
        visitas.modifyVisita(id, id_exposicion).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
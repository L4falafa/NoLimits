//reservas.js
//Controlador login y signup
const service = require("../../extras/services");
const reservas = require("../models/reservas");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('reservas', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        reservas.getReservas(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });


    },
    add: (req, res) => {
        //POST
        //Adds to the the table reservas the new reserva    
        const { nombre, autor, fecha, descripcion, id_sala} = req.body;

        //Send response
        reservas.addReserva(nombre, autor, fecha, descripcion, id_sala).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });

    },
    remove: (req, res) => {
        //POST
        //Removes from the table reservas the reserva
        const { id} = req.body;

        //Send response
        reservas.removeReserva(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table reservas the reserva campo, dato, id
        const { id, campo, dato} = req.body;

        //Send response
        reservas.modifyReserva(campo, dato,id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
//beepcons.js
//Controlador login y signup
const service = require("../../extras/services");
const beepcons = require("../models/beepcons");
const dbManager = require('../models/dbManager.js');
//get add remove update 
module.exports = {
    default:  (req, res) => {
        res.render('beepcons', {});
    },
    get: (req, res) => {
        id = req.query.id;
        //Send response
        beepcons.getBecons(id).then((result) => {
            res.send(result);
        }
        ).catch((error) => {
            res.send(error);
        });

    },
    add: (req, res) => {
        //POST
        //Adds to the the table beepcons the new beepcon
        const { id, id_exposicion} = req.body;
        
        //Send response
        beepcons.addBeacon(id, id_exposicion).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });   
    },
    remove: (req, res) => {
        //POST
        //Removes from the table beepcons the beepcon
        const { id} = req.body;
        
        //Send response
        beepcons.removeBeacon(id).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
    update: (req, res) => {
        //POST
        //Updates the table beepcons the beepcon
        const { id, id_exposicion} = req.body;

        //Send response
        beepcons.modifyBeacon(id, id_exposicion).then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send(error);
        });
    },
};
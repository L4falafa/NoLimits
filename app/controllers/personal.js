//Controlador login y signup
const service = require("../../extras/services");
const dbManager = require('../models/dbManager.js');

module.exports = {
    default:  (req, res) => {
        res.send("personal")
    },
    about: (req, res) => {
        res.send('sobre el personal');
    }
};
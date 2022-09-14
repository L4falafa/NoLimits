var express = require('express');
var router = express.Router();
const reservas = require("../controllers/reservas")

router.get('/', reservas.default);

router.get('/updateReserva', reservas.update);
router.get('/removeReserva', reservas.remove);
router.get('/addReserva', reservas.add);
router.get('/getReserva', reservas.get);

module.exports = router;
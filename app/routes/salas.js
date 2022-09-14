var express = require('express');
var router = express.Router();
const salas = require("../controllers/salas")

router.get('/', salas.default);

router.get('/updateSala', salas.update);
router.get('/removeSala', salas.remove);
router.get('/addSala', salas.add);
router.get('/getSala', salas.get);

module.exports = router;
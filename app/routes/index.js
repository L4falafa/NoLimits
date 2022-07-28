var express = require('express');
var router = express.Router();
const inicio = require("../controllers/inicio");

router.get('/', inicio.default);

module.exports = router;
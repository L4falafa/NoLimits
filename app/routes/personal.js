var express = require('express');
var router = express.Router();
const personal = require("../controllers/personal") 

router.get('/', personal.default);

router.get('/about', personal.about);

module.exports = router;
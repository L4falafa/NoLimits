var express = require('express');
var router = express.Router();
const personal = require("../controllers/personal") 

// define the home page route
router.get('/', personal.default);

// define the about route
router.get('/about', personal.about);

module.exports = router;
var express = require('express');
var router = express.Router();
const visitas = require("../controllers/visitas")

router.get('/', visitas.default);

router.get('/updateVisita', visitas.update);
router.get('/removeVisita', visitas.remove);
router.get('/addVisita', visitas.add);
router.get('/getVisita', visitas.get);

module.exports = router;
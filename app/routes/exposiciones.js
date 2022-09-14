var express = require('express');
var router = express.Router();
const exposiciones = require("../controllers/exposicions")

router.get('/', exposiciones.default);

router.get('/updateExposicion', exposiciones.update);
router.get('/removeExposicion', exposiciones.remove);
router.get('/addExposicion', exposiciones.add);
router.get('/getExposicion', exposiciones.get);

module.exports = router;
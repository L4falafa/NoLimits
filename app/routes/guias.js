var express = require('express');
var router = express.Router();
const guias = require("../controllers/guias")

router.get('/', guias.default);

router.get('/updateGuia', guias.update);
router.get('/removeGuia', guias.remove);
router.get('/addGuia', guias.add);
router.get('/getGuia', guias.get);

module.exports = router;
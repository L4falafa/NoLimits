var express = require('express');
var router = express.Router();
const beepcons = require("../controllers/beepcons")

router.get('/', beepcons.default);

router.post('/updateBeepcon', beepcons.update);
router.post('/removeBeepcon', beepcons.remove);
router.post('/addBeepcon', beepcons.add);
router.get('/getBeepcon', beepcons.get);

module.exports = router;
var express = require('express');
var router = express.Router();


router.all('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
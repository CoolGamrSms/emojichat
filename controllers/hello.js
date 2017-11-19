let express = require('express');
let router = express.Router();

// GET /hello route
router.get('/', function(req, res) {
    console.log("Hello world route");
    res.send("Hello world!");
});

module.exports = router;
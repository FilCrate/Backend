const express = require('express');
const router = express.Router();
const passport = require("passport");
const {strategy} = require("./auth");

passport.use(strategy);
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


router.get('/', (req, res) => {
    res.json({
        msg: "Successful GET to '/' route"
    });
});

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));
router.use('/login', require('./login'));

module.exports = router;
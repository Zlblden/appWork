var express = require('express');
var router = express.Router();
var Categories = require('../models/categories');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('nice one')
});
router.post('/',function(req, res, next) {
    var category = new Categories({
        name: req.body.name
    });
    category.save(function(err) {
        if (err) {
            throw (err);
        } else {
            console.log('Category created');
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end();
        }

    })

});
module.exports = router;

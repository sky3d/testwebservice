var express = require('express');
var data = require('../dataAdapter');
var router = express.Router();

router.get('/:devNum', function(req, res, next) {
    var devNum = req.params["devNum"];
    res.render('device', {dev: devNum, data: devNum });
    //res.json(data);
    //
    //data.loadDevData(devNum, function(items) {
    //    var items = "1 | 2 | 4" + items;
    //    res.render('device', { "dev": devNum, "data" : items });
    //});

});
router.post('/getdevdata', function(req, res) {
    data.loadDevData(2, function(res) {

        res.send({arg: 1, val:190});
    });

});

module.exports = router;

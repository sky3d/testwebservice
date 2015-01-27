var express = require('express');
var data = require('../dataAdapter');
var router = express.Router();

router.get('/:devNum', function(req, res, next) {
    var devNum = req.params["devNum"];
    res.render('device', {dev: devNum, data: devNum });
});
router.post('/getdevdata', function(req, res) {
    var devNum = req.body.devNum;
    console.log("Fetching data for " + devNum);

    data.loadDevData(devNum, function(entries) {
    var data = entries.map(function (item) {
            return {
                num : item.entry.num,
                arg: item.entry.data.arg,
                val: item.entry.data.val
            };
        });
        res.send(data);
    });
});

module.exports = router;

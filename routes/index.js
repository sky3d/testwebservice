var express = require('express');
var router = express.Router();
var data = require('../dataAdapter');

/* GET home page. */
router.get('/', function(req, res, next) {

    data.getDevices(function(items) {
        //data = []
        console.log("Populate device list");

        var data =  items.map(function (item, idx) {
            return {
                Title: item.toString(),
                Num: idx
            };}
        );
        res.render('index', {title: 'Device Statistics', devices: data});
    });

        //items.forEach(function (item) {
        //    var devInfo = new Object();
        //    devInfo.Title = item.toString();
        //    devInfo.Num = n;
        //    data.push(devInfo);
        //    console.log("Device: " + devInfo);
        //    n++;
        //});
        //res.render('index', { title: 'Express', devices: data });
    //});

});

module.exports = router;

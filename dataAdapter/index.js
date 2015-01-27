var mongoose = require('mongoose');
//var js = require('../public/javascripts');

mongoose.connect('mongodb://localhost/devicedb');

mongoose.connection.once('open', function (callback) {
    console.log("Database opened!!!");
    //js.onConnected();
});

var devSchema = mongoose.Schema({
    entry: {
        num: Number,
        title: String,
        data: {
            arg: String,
            val: Number
        }
    }
});
exports.getDevices = function getDevices(callback) {
    console.log("getDevices call");
    var Entry = mongoose.model('dataentries', devSchema);

    Entry.distinct('entry.title', function(err, devs) {
        if (err) return handleError(err);
        console.log("Entry.distinct call");
        callback(devs);
    });
};
exports.loadDevData = function loadDevData(devNum, res) {
    var Entry = mongoose.model('dataentries', devSchema);
    var param = "dev" + devNum;

    console.log("Fetching data for " + param);

    Entry.find({'entry.title':param}, function (err, entries) {
        if (err)
            return handleError(err);

        return entries;

        //console.log("CNT " + entries.length);
        //entries.forEach(function (entry) {
        //    entry = entry.toObject().entry;
        //    console.log('title: %s is a num: %s', entry.title, entry.num);
        //});

    });
    //console.log('Done!');
};

console.log('dataAdapter is loading...');
module.exports = this;

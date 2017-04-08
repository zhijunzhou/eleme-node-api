var fs = require('fs');
var file = './data/db.json';
var encoding = 'utf8';

exports.getAll = function (cb) {
    fs.readFile(file, encoding, function (err, data) {
        if (err) {
            cb(err);
            return;
        }
        var root = JSON.parse(data);
        if (typeof root === "object" && root) {
            cb(null, root);
        }
    })
}

exports.writeToFile = function (filepath, result, cb) {
    fs.writeFile(filepath, JSON.stringify(result), function (err) {
        if (err) {
            cb(err);
            return;
        }
        cb(null, result);
    });
}

exports.insert = function (obj, cb) {
    exports.getAll(function (err, data) {
        if (err) {
            cb(err);
            return;
        }
        if (Array.isArray(data.issues)) {
            data.issues.push(obj);
            exports.writeToFile(file, data, function (err, result) {
                if (err) {
                    cb(err);
                    return;
                }
                cb(null, obj);
            });
        }
    });
}

exports.update = function (obj, cb) {
    exports.getAll(function (err, data) {
        if (err) {
            cb(err);
            return;
        }
        if (Array.isArray(data.issues)) {
            for (let i = 0; i < data.issues.length; i++) {
                if (obj.id === data.issues[i].id) {
                    data.issues[i] = obj;
                    break;
                }
            }
            exports.writeToFile(file, data, function (err, result) {
                if (err) {
                    cb(err);
                    return;
                }
                cb(null, result);
            });
        }
    })
}
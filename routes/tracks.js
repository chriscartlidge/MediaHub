var express = require('express');
var multer  = require('multer');
var storage = require('../modules/storage/storage');
var router = express.Router();

/* GET home page. */
router.post('/upload', function(req, res) {

    var bob = new Storage('/Users/chriscartlidge/storage/', 'hello', 'world');

    bob.getAll('8ab99f6f-e5cf-4b32-a051-551e1bf3a3fa',function(){});

    console.dir(req.files);
    res.end("File uploaded.");
});

module.exports = router;

var util = require('util');
var fs = require('fs');

Storage = function (root, tenant, domain) {
  this.root = root;
  this.tenant = tenant;
  this.domain = domain;
};

var getPath = function(context, address, name){
  if (name === undefined){
   return util.format(
      '/%s/%s/%s/%s/',
      context.root,
      context.tenant,
      context.domain,
      address);
    }else {
      return util.format(
      '/%s/%s/%s/%s/%s',
      context.root,
      context.tenant,
      context.domain,
      address,
      name);
    }
}

Storage.prototype.getAll = function (address, callback) {
  var path = getPath(this, address);
  this.exists(address, function(){
    fs.readdir(path, function(err, files){
      for(var file in files){
        console.dir(file);
      }
    });
  });
};

Storage.prototype.get = function (address, name, callback) {
};

Storage.prototype.add = function (stream, address, name, callback) {

};

Storage.prototype.exists = function (address, success, fail) {
  fs.exists(getPath(this, address), function (exists) {
    if (exists) {
       success();
       }
       else {
         fail()
         };
  });
};



module.exports = Storage;

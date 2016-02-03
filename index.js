'use strict';

var Stream = require('stream');

function gulpLarger(obj) {

  var stream = new Stream.Transform({objectMode: true});

  stream._transform = function(file, unused, callback) {
    var filecp = JSON.parse(JSON.stringify(file));
    var newfile = filecp.history[1].replace(filecp.base, "");
    
    var sizediff = Math.abs(file.stat.size - filecp._contents.data.length);
    
    if( file.stat.size < filecp._contents.data.length ){
        console.log("\x1b[31mRemoving\x1b[0m", newfile, "it is larger by", sizediff, "bytes");
        file = null;
    }
    
    callback(null, file);
    
  };

  return stream;
}

module.exports = gulpLarger;
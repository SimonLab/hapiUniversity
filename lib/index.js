//user camel case for variable reprenseting a require(module)
var Hapi = require('hapi');
var Path = require('path');
var Heok = require('hoek');
var Version = require('./version.js');
var internals = {}; //encapsulate your variable

internals.init = function () {

  var server = new Hapi.Server();
  server.connection({port: '8000'}); //do not put host to localhost, it's useless because it's the default value
  server.connection({port: '7000'});

  server.register(Version, function (err){

    Heok.assert(!err,err);


    server.start(function (err) {

      Heok.assert(!err, err);//avoid to do try catch or a if on the err
      console.log('The server is running on', server.info.uri);
    });

  });
};

internals.init();

var Path = require('path');
var Package = require(Path.join(__dirname, '../package.json'));

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/version',
    config: {
      description: "return the version of the server",
      handler: function (request, reply) {

        return reply({version: Package.version}); //add return to be git@github.com:SimonLab/hapiUniversity.gitsure that we don't have code executed after
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'Version'
  // version: '1.0.0' //useless this is an internal plugin not a public one
};

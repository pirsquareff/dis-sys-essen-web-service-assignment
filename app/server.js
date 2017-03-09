var soap = require('soap');
var http = require('http');
var fs = require('fs');
var path = require('path');

var service = {
  DomainExtensionWS: {
    calc: {
      getDomainExtension: function(args) {
        var email = args.email;
        console.log(email);
        var domainExtension = email.split(".").slice(-1)[0];
        return { domainExtension: domainExtension };
      },
    }
  }
};

var xml = fs.readFileSync(path.resolve(__dirname, 'domainExtensionWS.wsdl'), 'utf8');

var server = http.createServer(function(request,response) {
  response.end("404: Not Found: "+request.url);
});

server.listen(8001);
soap.listen(server, '/domainExtensionWS', service, xml);

var soap = require('soap');
var url = 'http://localhost:8001/domainExtensionWS?wsdl';

soap.createClient(url, function(err, client) {
  if(err) throw err;
  console.log(client.describe().DomainExtensionWS.calc);
  client.getDomainExtension({ email: 'parinthorn.sa@gmail.com' },function(err,res) {
    if(err) throw err;
    console.log(res);
  });
});

/* eslint-disable */
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import { XMLHttpRequest } from 'xmlhttprequest';

export default function soap() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', 'http://localhost:8001/domainExtensionWS/', true);

  // build SOAP request
  var sr =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soapenv:Envelope ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
      'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
      'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
      'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<soapenv:Body>' +
        '<api:getDomainExtension soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
          '<email>parinthorn.sa.gmail.th</email>' +
        '</api:getDomainExtension>' +
      '</soapenv:Body>' +
    '</soapenv:Envelope>';

  xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp);
    if(xmlhttp.readyState == 4) {
      if(xmlhttp.status == 200) {
        // alert('done. use firebug/console to see network response');
        console.log(xmlhttp.responseText);
      }
    }
  }
  // Send the POST request
  xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  xmlhttp.send(sr);
  // send request
  // ...
}

// soap();

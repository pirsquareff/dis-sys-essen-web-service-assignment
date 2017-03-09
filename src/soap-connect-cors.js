/* eslint-disable */
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import { XMLHttpRequest } from 'xmlhttprequest';

export default function soap() {
  // var xmlhttp = new XMLHttpRequest();
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open('POST', 'http://localhost:8001/domainExtensionWS/', true);
    console.log("1");
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open('POST', 'http://localhost:8001/domainExtensionWS/');
    console.log("2");
  } else {
    // CORS not supported.
    xhr = null;
    console.log("3");
  }

  // xhr.open('POST', 'http://localhost:8001/domainExtensionWS/', true);

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

  xhr.onreadystatechange = function () {
    console.log(xhr);
    if(xhr.readyState == 4) {
      if(xhr.status == 200) {
        // alert('done. use firebug/console to see network response');
        console.log(xhr.responseText);
      }
    }
  }
  // Send the POST request
  xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8001/');
  xhr.setRequestHeader('Content-Type', 'text/xml');
  xhr.send(sr);
  // send request
  // ...
}

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }
//
// function makeCorsRequest() {
//   var url = 'http://localhost:8001/domainExtensionWS/';
//
//   var xhr = createCORSRequest('POST', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }
//
//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     // var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };
//
//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };
//
//   xhr.send();
// }

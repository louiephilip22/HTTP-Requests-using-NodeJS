var https = require('https');


function getAndPrintHTML (options) {
  var myChunk = [];
  //var requestOptions = {};
  //var options = requestOptions;

  https.get(options, function (response) {
    response.on('data', function(chunk) {
      myChunk.push(chunk);
      console.log(myChunk);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getAndPrintHTML(requestOptions);
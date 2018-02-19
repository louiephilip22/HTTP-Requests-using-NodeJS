var https = require('https');

function getAndPrintHTML () {
  //var https = require('https');
  var myChunk = [];
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function(chunk) {
      myChunk.push(chunk);
      console.log(myChunk)
      //console.log('[-- CHUNK OF LENGTH ' + chunk + ' --]');
      //console.log(chunk.toString());
    })
  });
}

getAndPrintHTML();
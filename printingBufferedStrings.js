var https = require('https');

function getAndPrintHTML () {

  var myChunk = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function(chunk) {
      myChunk += (chunk + '\n');
      console.log(myChunk)
      //console.log('[-- CHUNK OF LENGTH ' + chunk + ' --]');
      //console.log(chunk.toString());
    })
  });
}

getAndPrintHTML();
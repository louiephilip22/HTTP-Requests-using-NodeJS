var https = require('https');

function getAndPrintHTMLChunks () {
  //var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function(chunk) {
      console.log(chunk + '\n')
      //console.log('[-- CHUNK OF LENGTH ' + chunk + ' --]');
      //console.log(chunk.toString());
    })
  });
}

getAndPrintHTMLChunks();
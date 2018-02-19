var https = require('https');

function getAndPrintHTML () {

  var myChunk = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.on('data', function(chunk) {
      myChunk += chunk;
      console.log(myChunk)
    });
    response.on('end', function() {
      console.log(myChunk)
    });

  })

}

getAndPrintHTML();
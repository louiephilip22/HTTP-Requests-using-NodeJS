var https = require('https');

function getAndPrintHTML (options) {

  var myChunk = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

  https.get(options, function (response) {

    response.on('data', function(chunk) {
      myChunk += chunk;
    });

    response.on('end', function() {
      console.log(myChunk);

    });

  })

})

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);


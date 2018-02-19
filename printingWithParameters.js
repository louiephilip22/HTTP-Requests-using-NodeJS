var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
    response.on('data', function(chunk) {
      console.log(chunk + '\n')
    })
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
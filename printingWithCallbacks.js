var https = require('https');

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  var myChunk = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      myChunk += chunk;
    });

    response.on('end', function(){
      return callback(myChunk);
    });

  })

};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
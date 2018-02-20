var importFromModuleExport = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printReverse(html) {
  console.log(html.split('').reverse().join(''));
}

importFromModuleExport.getHTML(requestOptions, printReverse);
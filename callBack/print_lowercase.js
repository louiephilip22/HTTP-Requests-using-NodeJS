var importFromModuleExport = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

importFromModuleExport.getHTML(requestOptions, printLowerCase);
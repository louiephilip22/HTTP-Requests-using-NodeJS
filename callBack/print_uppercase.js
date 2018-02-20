var importFromModuleExport = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

importFromModuleExport.getHTML(requestOptions, printUpperCase);
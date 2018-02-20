var importFromModuleExport = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

importFromModuleExport.getHTML(requestOptions, importFromModuleExport.printHTML);
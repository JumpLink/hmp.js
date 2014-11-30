var jade = require('jade');

// WORKAROUND
var clearString = function (str) {
  // sails.log.debug('clearString');
  return str.substring(0, str.length - 4); // remove jade vom string
};

var clearIDString = function (str) {
  // sails.log.debug('clearIDString', str.substring(16));
  return str.substring(16); // remove "views/templates/" vom string
};

var templateRender = function (file, context) {
  // sails.log.debug('templateRender', file);
  file += '.jade';
  return jade.renderFile(file, context)
};

module.exports = {
  init: function(req, res) {
    // sails.log.debug(sails);
    return res.view("init", {
      templateRender: templateRender,
      clearIDString: clearIDString,
      clearString: clearString
    });
  }
}

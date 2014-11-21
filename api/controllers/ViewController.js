var jade = require('jade');

// WORKAROUND
var clearString = function (str) {
  return str.substring(0, str.length - 4); // remove jade vom string
}

module.exports = {

  init: function(req, res) {
    // sails.log.debug(sails);
    return res.view("init", {
      templateRender: function (file, context) {
        file += '.jade';
        return jade.renderFile(file, context)
      },
      clearString: clearString
    });
  }
}

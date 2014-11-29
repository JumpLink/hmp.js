/**
 * MapController
 *
 * @description :: Server-side logic for managing maps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var importFile = function (req, res, next) {
  var file = req.param('file');
  var mapObject = MapService.parse(file);
  sails.log.debug(mapObject);
}

module.exports = {
  importFile: importFile
};


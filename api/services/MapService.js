/*
 * Parse map in tiled json format (uncompressed)
 */
var parse = function (file) {
  var mapObject = require(file);
  return mapObject;
}

module.exports = {
  parse: parse
};

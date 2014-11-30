/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',

  // Bower dependencies
  // 'third-party/enchant.js-builds/build/enchant.js',
  // 'third-party/enchant.js-builds/libs/Box2dWeb-2.1.a.3.js',                 // required by box2d.enchant
  // 'third-party/enchant.js-builds/libs/gl-matrix-min.js',                 // required by gl.enchant
  // 'third-party/enchant.js-builds/libs/ammo.js',                          // required by physics.gl.enchant.js

  // http://enchantjs.com/resource/plugins/
  // 'third-party/enchant.js-builds/build/plugins/nineleap.enchant.js',     // enchant.js extension for 9leap.net, required by twitter.enchant, memory.enchant
  // 'third-party/enchant.js-builds/build/plugins/avatar.enchant.js',       // enchant.js extension for 9leap.net, Avatar character plugin for enchant.js with 9leap.net
  // 'third-party/enchant.js-builds/build/plugins/box2d.enchant.js',           // box2d physik engine for enchant.js: http://box2d.org/about/
  // 'third-party/enchant.js-builds/build/plugins/gl.enchant.js',           // Drawing library using WebGL By combining with enchant.js, high quality 3D drawing and combination with 2D drawing is possible
  // 'third-party/enchant.js-builds/build/plugins/collada.gl.enchant.js',   // Plugin to load collada format (.dae) files on gl.enchant.js
  // 'third-party/enchant.js-builds/build/plugins/extendMap.enchant.js',    // http://github.com/wise9/enchantMapEditor
  // 'third-party/enchant.js-builds/build/plugins/memory.enchant.js',       // enchant.js extention for 9leap.net
  // 'third-party/enchant.js-builds/build/plugins/mixing.enchant.js',          // A plugin for enchant.js which allows to mix arbitrary many {@link enchant.Class} classes together.
  // 'third-party/enchant.js-builds/build/plugins/mmd.gl.enchant.js',       // Plugin to allow use of MikuMikuDance PMD and VMD files in gl.enchant.js.
  // 'third-party/enchant.js-builds/build/plugins/physics.gl.enchant.js',   // Physical calculation library using ammo.js. Allows object movement using the gl.enchant.js physical calculator.
  // 'third-party/enchant.js-builds/build/plugins/primitive.gl.enchantjs',  // Primitive objects for gl.enchant.js
  // 'third-party/enchant.js-builds/build/plugins/socket.enchantjs',        // use sails socket instead
  // 'third-party/enchant.js-builds/build/plugins/tl.enchant.js',           // tl.enchant.js was merged into enchant.js
  // 'third-party/enchant.js-builds/build/plugins/twitter.enchant.js',      // ?
  // 'third-party/enchant.js-builds/build/plugins/ui.enchant.js',           // image files for gamepad, icons
  // 'third-party/enchant.js-builds/build/plugins/widget.enchant.js',       // Library for making mobile webpage-style UIs in enchant.js.
  // 'third-party/enchant.js-builds/build/plugins/wiiu.enchant.js',         // Library for making game for Nintendo wii U

  'third-party/BlocksJS/src/**/*.js',

  'third-party/angular/angular.js',
  'third-party/angular-ui-router/release/angular-ui-router.js',



  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/app.js',
  'js/config/*.js',
  'js/**/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];

var tplAngularJadeToInject = [
  'templates/**/*.jade'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
module.exports.tplAngularJadeToInject = tplAngularJadeToInject.map(function(path) {
  return 'views/' + path;
});


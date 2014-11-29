app.config( function($stateProvider, $urlRouterProvider, $locationProvider) {

  // use the HTML5 History API
  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/game');

  $stateProvider
  // LAYOUT
  .state('debug', {
    abstract: true
    , templateUrl: "debug"
    , controller: 'DebugController'
  })
  // HOME
  .state('debug.map', {
    url: '/debug/map'
    , resolve:{
      // about: function($sailsSocket) {
      //   return $sailsSocket.get('/content?name=about', {name: 'about'}).then (function (data) {
      //     return html_beautify(data.data[0].content);
      //   });
      // }
      // , goals: function($sailsSocket, $timeout) {
      //   return $sailsSocket.get('/content?name=goals', {name: 'goals'}).then (function (data) {
      //     return html_beautify(data.data[0].content);
      //   });
      // }
    }
    , views: {
      'content' : {
        templateUrl: 'debug/map'
        , controller: 'MapController'
      }
      , 'toolbar' : {
        templateUrl: 'debug/toolbar'
        , controller: 'ToolbarController'
      }
      , 'footer' : {
        templateUrl: 'debug/footer'
        , controller: 'FooterController'
      }
    }
  })
  .state('game', {
    url: '/game'
    , templateUrl: 'game'
    , controller: 'GameController'
  })
  ;
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngAnimate','ui.rCalendar', 'ngSanitize','ui.router','angular-timeline','angular-scroll-animate', 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $ionicConfigProvider.backButton.text('');

}])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  // Each tab has its own nav history stack:
  .state('tab.ficha', {
      url: '/ficha',
      views: {
        'tab-ficha': {
          templateUrl: 'templates/tab-ficha.html',
          controller: 'FichaCtrl'
        }
      }
    })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'timeLineCtrl'
      }
    }
  })
  .state('tab.calendar', {
    url: '/calendar',
    views: {
      'tab-calendar': {
        templateUrl: 'templates/tab-calendar.html',
        controller: 'calenderController'
      }
    }
  })
  .state('tab.tips', {
      url: '/tips',
      views: {
        'tab-tips': {
          templateUrl: 'templates/tab-tips.html',
          controller: 'timeLineCtrl'
        }
      }
    })
  .state('tab.tip-detail', {
    url: '/tips/:tipId',
    views: {
      'tab-tips': {
        templateUrl: 'templates/tip-detail.html',
        controller: 'TipDetailCtrl'
      }
    }
  })
  .state('tab.graficos', {
    url: '/graficos',
    views: {
      'tab-graficos': {
        templateUrl: 'templates/tab-graficos.html',
        controller: 'GraficosCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

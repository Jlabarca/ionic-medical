// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput', 'starter.services','ngAnimate','ui.rCalendar', 'ngSanitize','ui.router','angular-timeline','angular-scroll-animate', 'chart.js'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
      url: '/tips',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-tips.html',
              controller: 'timeLineCtrl'
          }
      }
    })


  

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('app.tips', {
      url: '/tips',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-tips.html',
              controller: 'timeLineCtrl'
          }
      }
    })

    .state('app.tip-detail', {
      url: '/tips/:tipId',
      views: {
          'menuContent': {
              templateUrl: 'templates/tip-detail.html',
              controller: 'TipDetailCtrl'
          }
      }
    })

    .state('app.calendario', {
      url: '/calendario',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-calendar.html',
              controller: 'CalendarCtrl'
          }
      }
    })
    .state('app.graficos', {
      url: '/graficos',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-graficos.html',
              controller: 'GraficosCtrl'
          }
      }
    })
    .state('app.config', {
      url: '/config',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-config.html',
              controller: 'ConfigCtrl'
          }
      }
    })

    .state('app.evento', {
      url: '/evento',
      views: {
          'menuContent': {
              templateUrl: 'templates/form-evento.html',
              controller: 'FormEventoCtrl'
          }
      }
    })

    .state('app.grafico-detail', {
      url: '/grafico/:graficoId',
      views: {
          'menuContent': {
              templateUrl: 'templates/grafico-detail.html',
              controller: 'GraficoDetailCtrl'
          }
      }
    })

    .state('app.ficha', {
      url: '/ficha/',
      views: {
          'menuContent': {
              templateUrl: 'templates/tab-ficha.html',
              controller: 'FichaCtrl'
          }
      }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});

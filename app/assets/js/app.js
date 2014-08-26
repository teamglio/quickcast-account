//use strict
var QuickcastAccount = angular.module('QuickcastAccount', [
    'ui.router',
    'ngAnimate'
    ]);

QuickcastAccount.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('welcome', {
      url: "/",
      views: {
        'view': { 
          templateUrl: 'views/welcome.html', 
          controller: 'WelcomeController'
        },
      }
    })
    .state('welcome.signUp', {
      url: "sign-up",
      views: {
        'form': { 
          templateUrl: 'partials/sign-up.html', 
          controller: 'WelcomeController'
        }
      }
    })
    .state('welcome.login', {
      url: "login",
      views: {
        'form': { 
          templateUrl: 'partials/login.html', 
          controller: 'WelcomeController'
        }
      }
    })
}); //end of route config
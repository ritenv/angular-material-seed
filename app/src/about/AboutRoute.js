(function(){
  'use strict';

  angular.module('about')
         .config(['$routeProvider', '$locationProvider', AboutRoutes]);

  function AboutRoutes($routeProvider, $locationProvider, $q){
    $routeProvider
      .when('/about', {
        templateUrl: '/src/about/view/content.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
  }

})();

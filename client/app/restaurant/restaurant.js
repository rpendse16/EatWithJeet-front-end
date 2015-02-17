'use strict';

angular.module('eatWithJeetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restaurants', {
        url: '/restaurants/:restaurant',
        templateUrl: 'app/restaurant/restaurant.html',
        controller: 'RestaurantCtrl'
      });
  });
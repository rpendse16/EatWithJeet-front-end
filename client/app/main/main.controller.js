'use strict';

angular.module('eatWithJeetApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeRestaurants = [];

    $http.get('/api/restaurants').success(function(awesomeRestaurants) {
      $scope.awesomeRestaurants = awesomeRestaurants;
      socket.syncUpdates('restaurant', $scope.awesomeRestaurants);
    });

    $scope.restaurantView = function(restaurant) {
      
    }

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('restaurant');
    });
  });

'use strict';

angular.module('eatWithJeetApp')
  .controller('RestaurantCtrl', function ($scope, $stateParams, $http, Auth, User) {
    // Use the User $resource to fetch all users
    $scope.awesomeRestaurants = [];

    $http.get('/api/restaurants').success(function(awesomeRestaurants) {
      $scope.awesomeRestaurants = awesomeRestaurants;
      awesomeRestaurants.forEach(function(restaurant) {
        if(restaurant.name == $stateParams.restaurant) {
          $scope.restaurant = restaurant;
        }
      });
      console.log(awesomeRestaurants);
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });

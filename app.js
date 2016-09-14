(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchList = "";
  $scope.messageStyle = "";


  $scope.checkList = function () {
    if ($scope.lunchList.length == 0) {
      $scope.message = "Please enter data first";
      $scope.messageStyle = "";
    } else {
      var arrayOfFood = $scope.lunchList.split(",");
      if (arrayOfFood.length == 0) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = "";
      } else if (arrayOfFood.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageStyle = "green";
      } else if (arrayOfFood.length > 3) {
        $scope.message = "Too much!";
        $scope.messageStyle = "red";
      }

    }
  };


}

})();

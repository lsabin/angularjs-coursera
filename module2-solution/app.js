(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
  $scope.items = ShoppingListCheckOffService.getToBuyItems();
  $scope.errorMessage = "";


  $scope.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);

    if ($scope.items.length=== 0) {
      $scope.errorMessage = "Everything is bought!";
    }

  }
}


AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
  $scope.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  console.log("bought items: " + $scope.boughtItems.length);
  $scope.errorMessage = "Nothing bought yet!";
}



function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name: "Cookies", quantity: 10},
               {name: "Cola", quantity: 20}
              ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    console.log("añade: " + toBuyItems[itemIndex].name);
    boughtItems.push(toBuyItems.splice(itemIndex, 1)[0]);
    console.log("boughtItems: " + boughtItems.length);

  };


  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };



}

})();

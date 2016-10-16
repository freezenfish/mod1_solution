(function(){
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchList = '';
    $scope.totalList = 0;

    $scope.checkList = function() {
      var totalLunchList = displayList($scope.lunchList);
      $scope.totalList = totalLunchList;
    };

    function displayList(list) {
      var totalLunch = '';
      if(list.length == '') {
        return totalLunch = 'Please enter your data';
      } else if (list.length <= 3) {
        return totalLunch = 'Enjoy!';
      } else {
        return totalLunch = 'Too Much!';
      }
      return totalLunch;
    }
  }
})();

var app = angular.module('myModule');
app.controller('outputCtrl', function($scope, madlibsFactory){
  $scope.madlibs = madlibsFactory.setOutput();
})

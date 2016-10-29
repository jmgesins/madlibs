var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, madlibsFactory){


                        //If this doesn't work, try "madlibsName"
$scope.click=function(madlibs){


  $scope.madlibsName=madlibs;

  madlibsFactory.setInput($scope.madlibsName);
}
})

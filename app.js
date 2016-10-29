var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
  .when('/', {
    controller: 'inputCtrl',
    templateUrl: 'input.html'
  })

  .when('/output', {
    controller: 'outputCtrl',
    templateUrl: 'output.html'
  })
});

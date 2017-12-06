angular.module('commandeApp')
.controller('VueControlleur', 
  function($scope,$route) {
    $scope.$on('$routeChangeStart', function() {
      console.log("route start",$route);
    });
    $scope.$on('$routeChangeSuccess', function() {
      console.log("route changed",$route);
    });
    $scope.$on('$routeChangeError', function() {
      console.log("route error",$route);
    });
    $scope.$on('$routeUpdate', function() {
      console.log("route update",$route);
    });
  }
);
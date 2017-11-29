angular.module('commandeApp')
.controller('DetailControlleur', 
  function($scope,$routeParams) {
    $scope.id=$routeParams.id;
    function isBonId(element) {
      return element.id == $routeParams.id;
    }
    $scope.commande = $scope.commandes.filter(isBonId)[0];
  }
);
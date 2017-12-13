angular.module('commandeApp')
.controller('DetailControlleur', 
  function($scope,$routeParams,CommandeService) {
    $scope.id=$routeParams.id;
    $scope.commande=CommandeService.getCommande($routeParams.id)
}
);
angular.module('commandeApp')
.controller('CommandeControlleur',
  function ($scope,CommandeService) {
    $scope.add=function() {
      $scope.commande={};
        $scope.ajout=true;
    };
    $scope.save=function() {
      $scope.commande.id=CommandeService.commandes.length+1;
      CommandeService.commandes.push(
        $scope.commande
        );
        $scope.ajout=false;
    };
    $scope.getCommandes=function() {
        return CommandeService.getCommandes();
    };
    $scope.getCommande=function(id) {
        return CommandeService.getCommande(id);
    };
  }
);
angular.module('commandeApp')
.controller('CommandeControlleur',
  function ($scope,CommandeService) {
    $scope.add=function() {
      $scope.commande={libelle: "ajout", montant : 100};
      $scope.commande.id=CommandeService.commandes.length+1;
      $scope.commande.montant=$scope.commande.id*10;
      $scope.commande.libelle=$scope.commande.libelle+$scope.commande.id;
      CommandeService.commandes.push(
        $scope.commande
        );
    };
    $scope.getCommandes=function() {
        return CommandeService.getCommandes();
    };
    $scope.getCommande=function(id) {
        return CommandeService.getCommande(id);
    };
  }
);
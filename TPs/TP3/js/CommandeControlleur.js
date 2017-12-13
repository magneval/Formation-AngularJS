angular.module('commandeApp')
.controller('CommandeControlleur',
  function ($scope) {
    $scope.add = function () {
      $scope.commandes.push(
              {id: 3, libelle: "ajout", montant: 500}
      );
    };
    $scope.getCommandes = function () {
      return $scope.commandes;
    };
  }
);
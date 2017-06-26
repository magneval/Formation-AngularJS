CommandeApp.controller('CommandeListCtrl', ['$scope', 'Commandes', 
  function ($scope, Commandes) {
    $scope.commandes = Commandes.query();
  }
]);

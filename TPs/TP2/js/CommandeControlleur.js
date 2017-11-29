angular.module('exo', [])
.controller('CommandeControlleur', 
    function($scope) {
        $scope.liste = [
            {id: 1, libelle: "test", montant: 10},
            {id: 2, libelle: "demo", montant: 100}
        ];
        $scope.add = function () {
            $scope.liste.push(
                    {id: 3, libelle: "ajout", montant: 500}
            );
        };
    }
);

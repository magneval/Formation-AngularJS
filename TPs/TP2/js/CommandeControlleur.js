angular.module('exo', [])
.controller('CommandeControlleur', 
    function() {
        this.liste = [
            {id: 1, libelle: "test", montant: 10},
            {id: 2, libelle: "demo", montant: 100}
        ];
        this.add = function () {
            this.liste.push(
                    {id: 3, libelle: "ajout", montant: 500}
            );
        };
    }
);

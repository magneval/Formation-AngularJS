var commandeApplication = angular.module('commandeApp',['ngRoute']);
commandeApplication.config(
    function($routeProvider){
        $routeProvider.when('/commandes/:id',{
                templateUrl: 'views/detail.html',
                controller: 'DetailControlleur'
            }
        );
        $routeProvider.otherwise({
                templateUrl: 'views/liste.html',
                controller: 'CommandeControlleur'
            }
        );
        /*
      this.commandes=[
            {id:1, libelle:"test",montant:10},
            {id:2, libelle:"demo",montant:100}
        ];
        */
    }
)

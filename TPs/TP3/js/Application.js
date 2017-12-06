angular.module('commandeApp',['ngRoute'])
.config(function($routeProvider, $locationProvider){
  //V1.2 avec url contennant le # et le ! pour être compatible AngularJS 1.6
        $routeProvider.when('/!Commandes/:id',{
                templateUrl: 'views/detail.html',
                controller: 'DetailControlleur'
            }
        );
  //V1.6
        $routeProvider.when('/Commandes/:id',{
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
       $locationProvider.html5Mode(true);
    }
);

angular.module('commandeApp',['ngRoute'])
.config(function($routeProvider, $locationProvider){
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
        $locationProvider.html5Mode(true);
    }
);

'use strict';

/**
 * @ngdoc overview
 * @name commandeApp
 * @description
 * # commandeApp
 *
 * Main module of the application.
 */
angular
        .module('commandeApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'CommandeListCtrl',
                        controllerAs: 'main'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl',
                        controllerAs: 'about'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        })
        .factory('Commandes', ['$resource',
            function ($resource) {
                return $resource('/rest/commandes');
            }
        ])
        ;

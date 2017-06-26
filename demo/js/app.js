var CommandeApp = angular.module('CommandeApp', ['ngResource']);
Commandesvc.factory('Commandes', ['$resource',
   function($resource) {
      return $resource('/rest/commandes');
   }
]);

angular.module('commandeApp')
  .factory('CommandeResource', ['$resource',
   function($resource) {
      return $resource('/rest/commandes/:id/.json');
   }
]);

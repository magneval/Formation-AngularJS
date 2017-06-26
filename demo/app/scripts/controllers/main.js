'use strict';

/**
 * @ngdoc function
 * @name commandeApp.controller:CommandeListCtrl
 * @description
 * # CommandeListCtrlCommandeApp.controller('CommandeListCtrl', 
 * Controller of the commandeApp
 */
angular.module('commandeApp')
  .controller('CommandeListCtrl', ['$scope', 'Commandes',function ($scope, Commandes) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.commandes = Commandes.query();
  }]);

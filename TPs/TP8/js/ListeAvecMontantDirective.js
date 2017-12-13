angular.module('commandeApp')
.directive('listeAvecMontant', function() {
    return {
      scope:{
          destination: '@',
          valeurs: '&'
      },
      restrict: 'EA',
      template: "\
      <ul>\
        <li data-ng-repeat='ligne in (valeurs())'>\
          <a data-ng-href='{{destination}}/{{ligne.id}}'>{{ligne.libelle}}</a> = {{ligne.montant}}\
        </li>\
      </ul>"
    };
  });

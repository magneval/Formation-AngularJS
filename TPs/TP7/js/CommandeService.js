angular.module('commandeApp')
	.service('CommandeService',
		['CommandeResource', function (CommandeResource) {
		this.commandes = CommandeResource.query();
		this.getCommandes = function () {
		  return this.commandes;
		};
		this.getCommande = function (id) {
		  var resultat;
		  angular.forEach(this.commandes, function (commande) {
			if (commande.id == id) {
			  resultat = commande;
			}
		  }, resultat)
		  return resultat;
		};
	  }
	]
);

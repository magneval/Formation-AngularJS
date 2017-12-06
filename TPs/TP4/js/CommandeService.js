angular.module('commandeApp')
.service('CommandeService',function(){
    this.commandes=[
        {id:1, libelle:"essai",montant:10},
        {id:2, libelle: "test", montant : 100}
    ];
    this.getCommandes=function() {
        return this.commandes;
    };
    this.getCommande=function(id) {
        var resultat;
        angular.forEach(this.commandes, function(commande){
            if(commande.id == id){
                resultat= commande;
            }
        }, resultat)
        return resultat;
    };
}
);

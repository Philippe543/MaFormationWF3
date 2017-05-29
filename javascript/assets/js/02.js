//--Déclarer un tableau numérique  (ici 2 façons différentes de déclarer un tableau.)
var monTableau = [];
var myArray    = new Array;

//-- affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo"
monTableau[1] = "Tanguy"
monTableau[2] = "Géraldine"


//pour duppliquer une ligne faire alt + maj + flèche vers le bas
// Pour avoir plusieurs curseurs faire + maj et descendre vers le bas

console.log(monTableau[0]);// -- Hugo
console.log(monTableau[2]);// -- Géraldine
console.log(monTableau);// -- affiche le tableau


//-- Déclarer et affecter des valeurs à un tableau numérique

var NosPrenoms = ["Yimin","alex","Cristian","Tritan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);


//---Déclarer et affecter des valeurs à un objet.(pas de tableaux associatifs en JS. Il y en a en PHP)
var Coordonnee = {
    "prenom"    : "hugo",
    "nom"       : "LIEGEARD",
    "age"       : 27
}

console.log(Coordonnee);
console.log(typeof Coordonnee);

//-- comment créer et affecter des valeurs à un tableau à 2 dimensions.

//-- Je vais créer 2 tableaux numériques
var ListeDePrenoms =["Hugo", "Rodrigue","Kristie"];
var ListeDeNoms    =["LIEGARD","NOUEL","SOUKAI"];

// Je vais créer un tableau à 2 dimensions à partir de mes tableaux précédents.
var Annuaire = [ListeDePrenoms,ListeDeNoms];
console.log(Annuaire);

//-- Afficher un nom et un prénom sur ma page HTML
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);


/**
 Créez un tableau à 2 dimensions appelé "AnnuaireDesStagiares" qui contiendra toutes les cooordonnées pour chaque stagiare
Ex: nom Prénoms, tel

 */


var ListeDePrenoms =["Hugo", "Rodrigue","Kristie"];
var ListeDeNoms    =["LIEGARD","NOUEL","SOUKAI"];
var ListeTelephone =["0110203040","0120304050","01305056070"]

var  AnnuaireDesStagiares = [ListeDePrenoms,ListeDeNoms,ListeTelephone];
//-- Afficher un nom et un prénom sur ma page HTML

console.log(AnnuaireDesStagiares);
document.write(AnnuaireDesStagiares[0][0]);
document.write(" ");
document.write(AnnuaireDesStagiares[1][0]);
document.write(" ");
document.write(AnnuaireDesStagiares[2][0]);

//Voila comment faire de façon pertinente

var AnnuaireDesStagiares =[
    {"prenom" : "Hugo", "nom" : "LIEGARD", tel : "0783 97 15 15"},
    {"prenom" : "Tanguy", "Manas" : "toto", tel : "0xxxx xx xx xx"},
    {"prenom" : "Yimin", "nom" : "Li", tel : "0yyy yy yy yy"}
];

console.log(AnnuaireDesStagiares)
console.log(AnnuaireDesStagiares[0].nom); //LIEGARD
console.log(AnnuaireDesStagiares[1].nom); //Manas

//-- Ajouter un élément dans un tableau

var Couleurs=["Rouge","jaune","vert"];

//--Si je souhaite ajouter un élément dans mon tableau.
//--je fais appel à la fonction push() qui me renvoie le nombre d'éléments de mon tableau.

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

//-- NB La fonction unshit() permet d'ajouter un ou plusieurs éléments en début de tableau.
//- la fonction Push ajoute et compte les éléments d'un tableau.

/**********************Récupérer et sortir le dernier élément de mon tableau et d'en récupérer la valeur
Je peux accessoirement récupérer cette valeur dans une variable */

var  monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

//-- La même chose est possible avec le premier élément en utilisant la fonction shift()
//-- NB: La fonction slice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.


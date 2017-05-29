//**********************Les fonctions HTML***************** */

// Déclarer une fonction
//--- cette fnctionne retourne aucune valeur
function DisBonjour(){
    // Lors de l'appel de la fonction, les instructions ci dessous seront exécutées.
    alert("Bonjour !");
}
//je vais appeler ma fonction "DisBonjour" et déclencher ses intructions.
DisBonjour();


//-- Déclarer une fonction qui prend une variable en paramètre
function Bonjour(prenom, nom){
document.write("<p>Hello <strong> "+ prenom + " " + nom + "</strong> !</p>")
};

//-- Appeler /Utiliser une fonction avec un paramètre
Bonjour("Hugo", "LIEGEARD");

//-- ou

var prenom="Hugo";
var nom   ="LIEGEARD";
Bonjour(prenom, nom);

//***Exercice:******************************************* */
//Créez une fonction d'effectuer l'addition de 2 nombres passés en paramètre.
///********************************* */
function addition(nb1,nb2){
   let resultat=nb1+nb2;
   //Le mot clé permet de renvoyer une valeur en sortie.
    return resultat;
}

document.write("<p>" + addition(10,5) + "</p>");


function addition(nb1,nb2){
   //let resultat=nb1+nb2;
   //Le mot clé permet de renvoyer une valeur en sortie.
    return resultat nb1 + nb2;
}

document.write("<p>" + addition(10,5) + "</p>");
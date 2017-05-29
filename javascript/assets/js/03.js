/*------------------La concatenation********************/


var DebutDePhrase  = "Aujourd'hui";
var DateDuJour     =new Date(); // Ici on indique que la variable que l'on crée est de type date
var SuiteDePhrase  =", sont présents : ";
var NombreDeStagiaires = 19;
var FinDePhrase        =" Stagiaires.<br>";

//.. Nous souhaitons maintenant grace à la concatenation, afficher tout ce monde en un seul morceau
document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() +1)+  "/"+ DateDuJour.getFullYear()+ SuiteDePhrase + NombreDeStagiaires + FinDePhrase);


/*--------------------- Exercice-----------------*/
//Créez une concaténation à partir des éléments suivants:

var phrase1 = "Je m'appelle";
var phrase2 = " Philippe et j'ai ";
var age     = 48;
var phrase3 = " ans !"
document.write(phrase1 + phrase2 + age + phrase3);
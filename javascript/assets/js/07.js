/*
Votre mission que vous devez acceptez !
 réliser à une fonction permettant à un internante de
    -Saisir son prénom dans un prompt
    -Retourner à l'utilisateur : Bonjour [Prenom], Quel age as tu ?
    -Saisir son age
    -Retourner à l'utilisateur : Tu es donc né en [année de naissance].
    -Afficher ensuite un récapitulatif dans la page.
    Bonjour [prénom], tu as [age] !

*/

//R
/*var prenom = prompt("Quel est votre prenom ? :  ","prenom");

var age    = prompt("bonjour "+ prenom + " Quel age as tu ?","age" );

var anneeactuel=2017;
var annee=anneeactuel-age;
document.write("anneeactuel"+ anneeactuel +"annee " +annee +"age " +age,);*/


//---Correction du prof
//1-Initiatilisation des variables.
var anneeactuelle =new Date();


//2-Création de ma fonction
function Hello()
{



    //2a--Je demande à l'utilisateur son prénm   (saisir un prenom dans un prompt)
    let prenom =prompt("Hello ! What is your name ? ","<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);
    //2b--Je lui demande soon age
    let age =parseInt(prompt("Hello "+prenom+"! How old are you ?","<saisirvotre age>" ));
    console.log(age);
    console.log(typeof age);

    //2cJ'affiche une alerte avec son année d enaissance !
    alert("Amazing ! you were born in "+(anneeactuelle.getFullYear() - age));
   //2d Affichage dans ma page html
   document.write("Bonjour "+prenom+"tu as"+age+" ans !");

}
//3 Execution de ma fonction



Hello();


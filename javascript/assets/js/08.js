/**************************Les conditions ************************/

var MarijoteLegaleFR = 18;

if (MarijoteLegaleFR>=19) {
    alert("Benvenu !");
}
 else
 {
    alert("Google...");
 }

/*-------------------------
Exercice
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale alors je lui souhaite la bienvenue sinon je fais une redirection sur Google après lui avoir signalé le soucis.
--------------------------*/
/* ce que j'ai fait
function autorisation()
{
    
let age =parseInt(prompt("Hello ! How old are you ?","<saisirvotre age>" ));
    console.log(age);
    console.log(typeof age);
    if(age>=MarijoteLegaleFR) {
        alert("Benvenu !")};
    else{
        alert("Google...")
    }  
    

}*/


// 1 Déclarer la majorité légale
var MarijoteLegaleFR=18;
// 2 Créer une fonction pour demander son age
function verifierAge(){
    //--Methode 1:on peut le faire en 3 lignes
    //let age=prompt("Bonjour, quel age avez vous ?","<Saisissez votre age>");
    //age=parseInt(age);
    //return age;


    //Methode 2 : ici on fait en une seule ligne.
    //--demande l'age de mon visiteur puis je la retourne
    return parseInt(prompt("Bonjour, quel age avez vous ?","<Saisissez votre age>"));
}




// 3 j'affiche une alerte
if(verifierAge() >= MarijoteLegaleFR){
    //-j'affiche un message de bienvenu
    alert("Bienvenu sur mon site internet pour les majeurs...");
}
else{
    //--j'affiche une alerte
    alert("Attention !!! Vous devez êtes majeur pour accéder à ce site !");

    //--Je redirige vers Google

document.location.href="https://lmgtfy.com/";

}
//********************Les Opérateurs de comparaison************* */

//L'opérateur de comparaison "==" signifie : Egal à ....
//Il permet de vérifier que 2 variables sont identiques

//L'opérateur de comparaison "===" signifie strictement égal à ...
// Il compare la valeur et le type de données.

// L'opérateur de comparaison "!=" signifie : différent de 

//L'opérateur de comparaison "!==" signifie : Strictement différent de ...



///Exercice :

//J'arrive sur un espace sécurisé au moyen d'un email et d'un mot de passe.
//Je dois saisir mon email et mot de passe afin d'être autentifié sur le site.
//En cas d'échec une alerte m'informe du problème.
//Si tous se passe bien, un message de bienvenu m'accueil.



/*-------------------------Les opérateurs de logiques

//L'opérateur ET : && ou and

//L'opérateur OU : || ou or


//L'opérateur "!"  :qui signifie le contraire de ou encore NOT.

















/*****************************************************/

//correction incomplet
//--base de données
var email, mdp;

email = "123@gmail.com"
mdp ="wf3"

//1-- demander son email à l'utilisateur
var emaillogin=prompt("Hello ! What is your email ? ","<Saisir votre email>");

//2--je vérifie l'email saisie (emaillogin) correspond à celui en BDD (email)
if (emaillogin===email){
    //2a Si tout est ok , je continue la vérification avec le mot de passe
    //2a1 demande à mon utilisateur, son mot de passevia un prompt
    var mdplogin=prompt("Hello ! What is your mdp ? ","<Saisir votre mdp>");


}








//1 saisir mot de passe et email

/*
emailutilisateur = "123@gmail.com"
mdputilisateur="123"


//2 Faire la double vérification (mot de passe + email) 

//3 revoyer message



//function verification()
//{



    //2a--Je demande à l'utilisateur son email   (saisir un email dans un prompt)
    let email=prompt("Hello ! What is your email ? ","<Saisir votre email>");
    console.log(email);
    console.log(typeof email);
    //2b--Je lui demande son mot de passe
    let mdp =prompt("What is your mdo ?","<saisir votre mdp>" );
    console.log(mdp);
    console.log(typeof mdp);


if(emailutilisateur===email){
    if(mdputilisateur===mdp){
        alert("Bienvenu sur mon site internet à accès restreint..");
    }
    else{
        alert("problème");

    }
    
}
else{
    alert("problème");
}
    





    //2cJ'affiche une alerte avec son année d enaissance !
 //   alert("Amazing ! you were born in "+(anneeactuelle.getFullYear() - age));
   //2d Affichage dans ma page html
 //  document.write("Bonjour "+prenom+"tu as"+age+" ans !");
//}

fin de ce que j'ai fait*/
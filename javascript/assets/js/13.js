/****************La Manipulation des contenus********/



function l(e) {
    console.log(e)
};

//---Je souhaite récupérer mon lien; comment procéder ?
var google=document.getElementById("google");
l(google);

//-- Maintenant, je souhaite accéder aux informations de ce lien par exemple :

// ---A Le lien vers lequel pointe la balise
l("Le lien vers lequel pointe la balise :");
l(google.href);

//-- B L'ID de la balise
l("l'ID de la balise:");
l(google.id);

//-- C : la classe de la balise
l("La classe de la balise :");
l(google.classname);

//--D : Le texte de la balise (l'élément)
l("Le texte de la balise");
l(google.textContent);


//-- Maintenant je souhaite modifier le contenu de mon lien
//-- Comme une variable classique, je vais simplement venir affecter une nouvelle valeur
google.textContent= "Mon lien vers Google !";

/**Ajouter un élémént dans ma page
 --Nous allons utiliser 2 méthodes

 //--1: La foànction document.creatElement() va permettre de générer un nouvel élémént dans le DM que je pourrais par la suite modifier avec les méthodes que nous venons de vir

 //PS : Ce nouvel élémént est placé en mémoire.

 //définition de mon élémént*/

var span=document.createElement("span");

//-- si je souhaite lui donner un ID
span.ID="MonSpan";

//--Si je souhaite lui donner du contenu
span.textContent= "Monbeau texte en JS";


//--2: La fonction appendChild() va me permetter de rajouter un enfant à un élémént du DM.
google.appendChild(span);


/**Exercice 
En partant du travail déjà réalisé sur la page,
Créer directement dans la page, une balise <h1></h1> ayant comme contenu : "titre de mon article".

Dans cette balise, vous créerez un lien vers une URL de votre choix.

bonus: Ce lien sera de la couleur rouge et non souligné

*/
//--Création de la balise h1
var h1 =document.createElement("h1");

//-- Création de la balise a
var a = document.createElement("a");

a.text.textContent="titre de mon article";

//-- Je vais donner un titre à mon lien:
a.href="#"

//--appendchild()

//-- je mets mon lien (a) dans mon h1
h1.appendChild(a);

//Je mets mon h1 dans ma page, dans mon body
document.body.appendChild(h1);


//correction du bonus

//-- Je veux que mon lien sopit de couleur rouge

a.style.color = "red";

//-- Je veux que mon texte ne soit pas souligné
a.style.textDecoration="none";









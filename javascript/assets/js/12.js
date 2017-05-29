/******************Le Dom */

/*Le DOM est une interface de développement en JS pour HTML. Grace au DOM, je vais être en mesure d'accéder /modifier mon HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu HTML !

Chaque page chargée dans mon navigateur a un objet "document".


//-- comment puis je faire pour récupérer les différentes informations de ma page µHTML ?

--------------document.getelementById---------------

Document.getElementById() : c'est une fonction qui va me permettre de récupérer un élément HTML à partir de son identifiant unique : ID.
*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour);
/*
-------------document.getElementByClassName----------
document.getElementByClassName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste)HTML à partir de leur classe
*/
var contenu=document.getElementsByClassName("contenu");
console.log(contenu);

/*
---------------document.getelementByTagName-------------
document.getelementByTagName : c'est une fopnction qui va permettre de récupérer un ou plusieurs éléménts (une liste) HTML à partir de leur *nom de balise*


*/
var =span.getElementsByTagName("span");
console.log(span);
/* Modification pour git */

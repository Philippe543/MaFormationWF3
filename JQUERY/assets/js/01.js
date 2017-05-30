/***********Disponibilité du DOM************************** 

 A partir du moment ou DOM ,cad l'ensemble de l'arborescence de ma page est compètement chargé, je peux commencer à utiliser JQuery.

Je vais mettre l'ensemble de mon code dans une fonction. Cette fonction sera appelé AUTOMATIQUEMENT PAR jquery lorsque le DOM sera entièrement défini.

   3 façons de faire :
*/
//--1 ière possibilité
//jQuery(document).ready(function(){
    //--Ici le DOM est entièrement chargé, je peux procéder à mon code JS.
//});


//--2 ième possibilité

//$(document).ready(function(){

//});

//-- 3 ième possibilité sans le (document) ready()
$(function(){alert("Hello World");

});


//-- En JS : 
document.getElementById("TexteEnJQuery").textContent = "Mon texte en JS";
//--En JQuery

$("#TexteEnJQuery").html("Mon Texte en JQuery");
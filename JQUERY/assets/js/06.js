/** Les sélecteurs d'enfants */


//-- Initialisation de JQuery
$(function(){
    //-- Ici commence mon code Query
    //--LesFlemards.js
    function l(e){
        console.log(e);
    }

    //-- Je souhaite sélectionner mes DIVs
    l($("div"));

    //-- Je souhaite sélectionner mon header
    l($("header"));


    //--Je souhaite sélectionner tous les éléménts descendants directs (les enfants) qui sont dans "header"
    l($("header").children());

    //-- Je souhaite parmi mes descendants directs, uniquement les éléments "ul"
    l($("header").children("ul"));

    // 
    //-- Je souhaite récupérer tous les éléments "li" de mon "ul"
    l($("header").children("ul").find("li"));

    // 
    //--Je souhaite récupérer uniquement le 2ième élémentde mes "li".
    l($("header").find("li").eq(1));

    //--Je souhaite connaitre le voisin de mon "header"

    l($("header").next())
    l($("header").next().next()) // Le voisin du voisin
    l($("header").prev())  // Le voisin d'avant

    //---Les parents
    l($("header").parent())

});
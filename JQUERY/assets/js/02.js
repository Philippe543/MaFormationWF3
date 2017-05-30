/** Les  sélecteurs JQuery */

//-- Format : $('selecteur')
//--En Jquery, tous les sélecteurs CSS sont disponibles...

//-- DOM READY !
$(function(){
    //les flemards.js
    function l(e){
console.log(e);
    }

    //--Sélectioner les balises span:
    //-- en JS :
    l("span en JS !")
    l(document.getElementsByTagName('span'))

    //version en JQuery
    l('span en JQ :')
    l($("span"))

    //--selection de mon menu

    //-- en JS :
    l("ID via JS !")
    l(document.getElementById('menu'))

    //version en JQuery
    l('ID via JQuery :')
    l($("#menu"));

    //--selection par attribut

    l("par attribut :")
    l($("[href='http://google.fr']"))

});
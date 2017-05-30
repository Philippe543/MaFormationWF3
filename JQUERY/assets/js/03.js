/**************Le chainge de méthdes en JQuery */
$(function(){
    //--je souhaite cacher toutes les div de ma page HTML
    $('div').hide('slow', function(){
    //-- une fois que la méthode hide() est terminée, mon alerte peut s'exécuter.
    alert("fin du hide");
    //Nota bene : La fonctin s'executera pour l'ensemble des éléments du sélecteur.
   //---css
   $("div").css("background","yellow");
   $("div").css("color","red");

   //--je fais réapparaitre mes DIVs
   $('div').show();

     });
     //-- en utilisant le chainage de méthode, vous pouvez faire s'enchainer plusieurs fonctions les unes et les autres...
     $('p').hide(2000).css('color','blue').css('font-size','20px').delay(2000).show(500);
     
     // 2000 est en milisecondes

     //-- mais c'est encore trop long
    $('p').hide(2000).css({'color':'blue','font-size':'20px'}).delay(2000).show(500);

});


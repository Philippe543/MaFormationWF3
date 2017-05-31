// déclaration de fonctions

//-- Déclaration de la fonction pour vérifier la validité d'un email provient du site ///https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}


//-- Initialisation de JQuery
$(function(){


    //-- Ecouter à quel moment est soumis notre formulaire
    //-- A la soumission de mon formulaire, je vais exécuter une fonction anonyme.

    //-- en JS document.getElementById("contact").addEventListener("submit"),MaFonctionAExecuter);
    $("#contact").on("submit",function(event){
            //-- event : correspond ici à notre événement"submit"



            //-- arrêter le redirection html5
            event.preventDefault();


            //---Suppression des différentes erreurs
            //-- Je cible tous les éléments qui contiennent la classe "has error" puis je supprime cette class "has-error"
            $('#contact .has-error').removeClass("has-error");
            //--Je cible tous les textes qui sont de classes "text-danger" et je les supprime
            //Remarque : on fait cette étape de vérification avant de faire les vérifications 
            $('#contact .text-danger').remove();

            //-- Déclaration des variables(champs à vérifier)
            var nom    =$("#nom");
            var prenom =$("#prenom");
            var email  =$("#email");
            var tel    =$("#tel");

            //-- Je passe à la vérification de chaque champ...

            //--1 Vérification du nom
            if(nom.val().length == 0){
                nom.parent().addClass('has-error');

                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());

            } 

            //--2 Vérification du prénom
            if(prenom.val() ==0){
                prenom.parent().addClass('has-error');

                 $("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
            }
            //--3 Vérification de l'email

            if(!validateEmail(email.val())){
                 email.parent().addClass('has-error');

                 $("<p class='text-danger'>Vérifier votre email</p>").appendTo(email.parent());


            }



            
            //--4 Vérification du téléphone
            if(tel.val().length ==0 ||$.isNumeric(tel.val())==false){
                tel.parent().addClass('has-error');

                 $("<p class='text-danger'>N'oubliez pas de saisir votre numéro de téléphone</p>").appendTo(tel.parent());
            }


            if($(this).find('.has-error').length ==0){
                $(this).replaceWith('<div>Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleures délais.</div>');
            }

            //
            else {
                $(this).prepend('<div class="alert alert-danger">Certaines informations sont erronées. </div>');
            }


    });


});
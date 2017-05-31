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


//--Initialisation JQuery

$(function(){

//** Déclaration des variables*/
var contacts=[];

/*Déclaration des fonctions*/



/*fonction ajouterContact(contact) :Ajouter un contact dan sun tableau de contacts, 
mettre à jour le tableau html, réinitialiser le formulaire et afficher une notification.*/

function ajouterContact(Contact){};

//--Fonction ReinitialisationDuFormulaire(){} :après l'ajout d'un contact, on remet le formulaire à 0 !
function reinitialisationDuFormulaire() {};

//-- Affichage de notification
function afficheUneNotification(){};

//--Vérification de la présence d'un contact dans Contacts
function estceQunContactEstPresent(contact){};
console.log("test4");
//--Vérification de la validité d'un email
//--https://paulund.co.uk/regular-expression-to-validate-email-address
//



/*-------------------------------------------Traitement de mon formulaire*/

//-- Détection de la soumission de mon formulaire




console.log("test5");


$("#contact").on("submit",function(event){
            //-- event : correspond ici à notre événement"submit"



            //-- arrêter le redirection html5
            event.preventDefault();
console.log("test5bis");
//---Suppression des différentes erreurs
            //-- Je cible tous les éléments qui contiennent la classe "has error" puis je supprime cette class "has-error"
            $('#contact .has-error').removeClass("has-error");
            //--Je cible tous les textes qui sont de classes "text-danger" et je les supprime
            //Remarque : on fait cette étape de vérification avant de faire les vérifications 
            $('#contact .text-danger').remove();




console.log("test6");



//-- Déclaration des variables(champs à vérifier)
            var nom    =$("#nom");
            var prenom =$("#prenom");
            var email  =$("#email");
            var tel    =$("#tel");

     //--1 Vérification du nom
            if(nom.val().length == 0){
                nom.parent().addClass('has-error');

                $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
               

            } 
            console.log("test");

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

//si le formulaire est complet, récupérer l'enregistrement
























}); ///-fin de JQuery Ready !
/-- Déclaration de la fonction pour vérifier la validité d'un email provient du site ///https://paulund.co.uk/regular-expression-to-validate-email-address
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}



// -- Initialisation de jQuery (DOM READY)
$(function() {

    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(Uncontact) {
        // -- Ajut de "UnContact" dans le tableau "CollectionDeContacts"
        CollectionDeContacts.push(Uncontact);
        //-- Observation de l'ajout du co,ntact dans la console
        console.log(CollectionDeContacts);
        //-- On cache la phrase : aucun contact
        $('.aucuncontact').hide();

        //--Mise à jour du HTML
        $('#LesContacts').find('tbody').append(' <tr><td>'+Uncontact.nom+'</td><td>'+Uncontact.prenom+'</td><td>'+Uncontact.email+'</td><td>'+Uncontact.tel+'</</td></tr>');

         reinitialisationDuFormulaire();
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {
            //1 ière méthode en JS
            //document.getElementById('contact').reset();
            //2 ième méthode en JQuery
            $('#contact').get(0).reset();
            // autre méthode
            //$('#contact .form-control').val("");

    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
            $('.alert-contact').fadeIn().delay(3000).fadeOut();

    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(Uncontact) {
            //-- Booleen qui indique la présence ou pas d'un contact
            var estpresent = false;
            //--pn parcourt le tableau à recherche d'une correspondance.
            for(var i=0; i<CollectionDeContacts.length;i++){
                //--Vérification pour chaque contact du tableau s'il y a une correspondance avec mon objet contact.
                if(Uncontact.email===CollectionDeContacts[i].email) {


                    //-- Si une correspondance est trouvé "est présent" passer à vrai (true)
                    estpresent=true
                    //--On arrête la boucle, plus besoin de poursuivre
                    break;
                }
            }

            return estpresent;
    }

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){}

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire

    $('#contact').on('submit',function(e){
        //--Voir le contenu de l'événement
        //console.log(e);
        //--stopper la redirection de la page vers PHP
        e.preventDefault();
        //-- Récupération des champs à vérifier
        var nom, prenom, email, tel;
        nom     =$('#nom');
        prenom  =$('#prenom');
        email   =$('#email');
        tel     =$('#tel');


        //--- Vérification des informations ( on va utiliser une autre méthode
        var mesInformationsSontValides = true;


        //---Vérification du nom
        if(nom.val().length==0){
            mesInformationsSontValides=false;
        }
        //---Vérification du prénom
        if(prenom.val().length==0){
            mesInformationsSontValides=false;
        }

        //---Vérification du tel
        if(tel.val().length==0){
            mesInformationsSontValides=false;
        }
        //---Vérification du mail
        if(!validateEmail(email.val())){
            mesInformatinsSontValides=false;
        }


        if(mesInformationsSontValides){
            //--Tout est correct, préparatin du contact
            var contact={
                    'nom'       : nom.val(),
                    'prenom'    : prenom.val(),
                    'email'     : email.val(),
                    'tel'       :tel.val(),
            };
            //bservons la console
            console.log(contact);

            ///Vérification avec EstcequuncontactEstPresent
            if(!estCeQunContactEstPresent(contact)){
                //--ajout du contact
                ajouterContact(contact);
            }
            else {
                alert('Attention\nCe contact est déjà présent.');
                reinitialisationDuFormulaire();
            }

        }

        else
        //-- Mes informations ne sont pas valides
        //-- \n : retour à la ligne
            alert('Attentin\nVeuillez bien remplir tous les champs.');

    console.log(mesInformationsSontValides)
    });
    

}); // -- Fin de jQuery READY !
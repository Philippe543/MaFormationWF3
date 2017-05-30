/************Les Evènements *******************************/
// Les évènements vont me permettre de de déclencher une fonction, c'est à dire : une série d'instructions suite à une action de mon utilisateur.
// Objectif : Etre en mesure de capturer ces évènements afin d'exécuter une fonction.

/*Les évènements : Mouse (souris)
        click        : au click sur un évènement,
        mouseenter   : la souris passe au dessu de la zone qu'occupe un évènement.
        mouseleave  : La souris sort de la zone

Les évènements : Keyboard (clavier)
        keydown : Une touche du clavier est enfoncé
        keyup   : une touche du clavier est relachée.

Les évènements : Windows (fenêtre)
        scroll  : défilement de la fenêtre
        resize  : redimensionnement de la fenêtre

Les évènements : form (formulaire)
        change : pour les évènements <input>, <select> et <textarea>
        submit : à l'envoi d'un formulaire.

Les évènements : document
        DOMContentLoaded : Executé lorsque le document HTML est complètement chargé sans attendre le css et les images.


***************Les écouteurs d'événements

Pour attacher un événement à un élément ou autrement dit pour déclarer un écouteur d'événement qui se chargera de lancer une action, c'est à dire une fonction pour un événement donné,
Je vais utiliser la syntaxe suivante:*/

var p= document.getElementById("MonParagraphe");
console.log(p);

//-- Je souhaite que mon paragraphe soit rouge au click de la souris.

        //-1 Je définis une fonction chargée d'executer cette action.
        function changeColorToRed(){
p.style.color ="red";
        }
        //--2 : je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'événement.
        p.addEventListener("click",changeColorToRed);



/*******************Exercice pratique */
//A l'aide de javascript, créer un champ "input" type text avec un ID unique.
//Afficher ensuite dans une alerte, la saisie de l'utilisateur.

//-- création du champ input
var input= document.createElement('input');

//--attribution d'un attribut
input.setAttribute('type','text');
input.setAttribute("placeholder","Saisissez votre texte")

//--attribution d'un ID
input.id ="MonInput";

//-- Ajout de l'élément dans la page
document.body.appendChild(input);

///--------Création d'un écouteur

input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput(){
    alert(input.value);
}




















//alert("Wow ! tu es sur ma page !");
//deux slash pour faire un commentaire uniligne.
/*
    Ici, je peus faire un commentaire sur plusieurs ligneq

Raccourcis ctrl + /
        ou Ctrl + shift + /

*/

//-- 1 :declarer une variable en JS
var Prenom;

//--2 : affecter une valeur
Prenom = "Hugo";

//-- 3 : afficher la valeur de la variable dans la console
console.log(Prenom);

/** Les types de variables **/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
| ~~~~~~
Ici typef me permet de connaitre le type de ma variable.
*/
console.log(typeof Prenom);

// -- Déclaration d'un nombre --Ici on déclare une variable et on lui donne égaelement une valeur
var Age = 40;

//-- Afficher dans la console
console.log(Age)

//-- Connaitre son type de variable
console.log(typeof Age);

/*---La portée des variables--------------------------------------------------------------
    Les variables déclarées directement à la racine du fichier JS sont appelées variables GLOBALES.
    Elles sont disponibles dans l'ensemble de votre document y compris dans les fonctions.
    ###
    Les variables qui sont déclarées à l'intérieur d'une fonction sont appelées variables lOCALES.
    ####
    Depuis ECME6, vous pouvez déclarer une variable avec le mot clé "let".

    Votre variable sera accessible uniquement dans le bloc dans lequel elle est contenu cad déclaré.

    Exemple:
    Si elle est déclarée dans une condition, elle sera disponible uniquement dans le bloc de la condition.

-----------------------------------------------------------------------------------------
*/


/* les différents type de variables

/** Les variables FLOAT*/
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//--- Les Booléens (vrai / faux)

var unBooleen = false;//-- true
console.log(unBooleen);
console.log(typeof unBooleen);

//----Les constantes

/*
    La déclaration CNST permet de créer une constante accessible uniquement en lecture.
    Sa valeur ne pourra pas être modifié par des réaffectations ultérieures.
    Une constante ne peut pas être déclarée à nouveau.
*/
//-- Généralement par convention, les constante sont en majuscules.

const HOST = "localhost";
const USER = "root";
const PASSWORD ="mysql";

//--- Je ne peux pas faire cela...
//USER = "Hugo"
//Uncaught TypeError: Assignment to constant variable.
// On ne peut pas affecter une valeur constante à une variable



/*******************La minute Info***************************************** */


//Au fur et à mesure que l'on affecxte ou réaffecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type.

//En javascript (ECMA Script), las variables sont auto-typées.
//Pour convertir une variable de type number en string et string en numbe, je peux utiliser les fonctions natives de Javascript.
//----------------------------------------------------------------------------
var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

//---La fonction parseInt() pour rendre
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


/* Parenthèse
var MonNom="LIEGARD";
console.log(MonNom);

MonNom="MANAS";
console.log(MonNom);

MonNom="JI";
console.log(MonNom);

*/

//- Je ré-affecte une valeur à une variable
unNombre="12.55";
console.log(unNombre);
console.log(typeof unNombre);

//-- La fonction parsefloat() permet de retourner un Float sur la base d'un string

unNombre=parsefloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//---La conversion d'un nombre en string avec toString()
var unNombreEnString =10;
var maChaineDecaractere = unNombreEnString.toString();
console.log(unNombreEnString);
console.log(typeof unNombreEnString);
console.log(typeof maChaineDecaractere);
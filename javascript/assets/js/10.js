/* I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. */

function w(t) {
    document.write (t);
}

function l(e) {
    console.log(e);
}

//--1 Création de notre tableau 3D en JS !

var PremierTimestre =[
{
    "nom"   :"Liegard",
    "prenom": "Hugo",
    "moyenne":{
                "francais":4,
                "math":8,
                "physique":18,
                }    
},
{
    "nom"   :"Manas",
    "prenom": "Tanguy",
    "moyenne":{
                "francais":6,
                "math":15,
                "physique":9,
                "anglais":15,
                }    
},
{
    "nom"   :"Araujo",
    "prenom": "Thiago",
    "moyenne":{
                "francais":10,
                "math":15,
                "physique":16,
                }    
},
];

l(PremierTimestre);

w("<ol>");
//-- Je souhaite afficher la liste de mes étudiants.
for (i=0; i<PremierTimestre.length; i++){
    //--On récupère l'objet Etudiant de l'itération
    let Etudiant = PremierTimestre[i];


    //--apercu dans la console
    l(Etudiant);
//-- Je définis NombreDeMatiere et la SommeDesNotes à 0
    var NombreDeMatiere=0, sommeDesNotes=0;


//--- Afficher le prénom et le nom de l'étudiant
    w("<li>");
        w(Etudiant.prenom+" "+PremierTimestre[i].nom);
        //-- Afficher la moyenne de l'étudiant aux différentes matières.
          w("<ul>");  
                    
            for(let matiere in Etudiant.moyenne){
                    //l(matiere);
                    //l(Etudiant.moyenne[matiere]);
                    NombreDeMatiere++;
                    sommeDesNotes+=Etudiant.moyenne[matiere];


               w("<li>")
                    w(matiere+" : "+Etudiant.moyenne[matiere]);
               w("</li>")
            }         //--Fin de la boucle matière
                 w("<li>")
                    w("<strong>Moyenne Générale :</strong>"+(Math.round(sommeDesNotes / NombreDeMatiere)));
               w("</li>")



        w("</ul>")
    w("</li>");

} //Fin de la boucle des étudiants
w("</ol>");




/*//////////////////////////////
w("<ol>");
//-- Je souhaite afficher la liste de mes étudiants.
for (i=0; i<PremierTimestre.length; i++){
    //--On récupère l'objet Etudiant de l'itération
    let moyennefrancais = PremierTimestre[i].moyenne[i].francais[i];


    //--apercu dans la console
    l(moyennefrancais);
}

/*--- Afficher le prénom et le nom de l'étudiant
    w("<li>");
        w(Etudiant.prenom+" "+PremierTimestre[i].nom);
        //-- Afficher la moyenne de l'étudiant aux différentes matières.
    w("</li>");

}*/
w("</ol>");
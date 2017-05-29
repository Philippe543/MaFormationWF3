/**********************Les Boucles********************************** */

//**La boucle for 

//-- Pour i=
for(var i = 1; i <= 10 ; i++) {
    document.write("<p> Instruction executée : <strong>" + i + "</strong></p>");    
}

    document.write("<hr>");
//-- La boucle while : tant que

var j=1;
while(j<=10){
    document.write("<p> Instruction executée : <strong>" + j + "</strong></p>");    
    j++;
}

/** Supposons le tableau suivant :*/
var prenoms =["Hugo","Jean","Mathieu","Luc","Pierre","Marc"];


/* Consigne : grace à une boucle FOR afficher la liste des prénoms du tableau suivant dans la console ou sur votre page*/


//Ma façon
var k=1;

for (k=1; k<=3;k++){
    document.write("<p> nom de l'apotre : <strong>" + prenoms[k]+ "</strong></p>");    

}

//1 ière méthode
for (var i=0;i<6;i++){
    console.log(Prenoms[i]);

}
console.log(Prenoms[i])
//2ième façon

var NBElementsDansMonTableau = Prenoms.length;
for (var i=0;i<NBElementsDansMonTableau;i++){
        console.log(prenoms[i]);
}
console.log(Prenoms[i])


//3 ième façon

var j=0;
while (j< prenoms.length){
    console.log(prenom[j]);
    j++;
}

//4 ième façon avec la bucle frEach
//Attention à la performance

prenoms.forEach(afficheprenoms)

function afficheprenoms(valeur, index){
    console.log(valeur);
}


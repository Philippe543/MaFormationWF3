var prenomnom =["Hugo Liegard","Karim Ihadadene","Ruby Hericourt","Gérard Moulin","Pierre Menes"];
var francais=[4,8,10.5,12,10];
var math=[8,18.5,11,12,10];
var physique=[18,18,4,12,10];

console.log(francais);

var moyenneetudiant=[0,0,0,0,0];

for (i=0;i<5;i++){
    moyenneetudiant[i]=(francais[i]+math[i]+physique[i])/3
    }
    console.log(moyenneetudiant);

document.write('<ol>');
/*
for (i=0;i<5;i++){
document.write("<li>la moyenne de "+prenomnom[i]+" est de "+moyenneetudiant[i] + '</li>');
*/

for (i=0;i<5;i++){
document.write("<li>les moyennes de "+prenomnom[i]+"sont de "+
                    "<ul><li> en français "+francais[i]+"</li>"+
                    "<li> en math "+math[i]+"</li>"+
                    "<li> en physique "+physique[i]+"</li><li>"
+moyenneetudiant[i] + '</li></ul></li>');




}

document.write('</ol>')


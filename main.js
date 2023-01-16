// // // # Exercice d'observation :
// // // >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// // // > Fais des console.log pour chaque exercice afin de montrer le résultat!
// // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text

let h2 = document.querySelector('h2');
console.log(h2.innerHTML);

// // // ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"

document.querySelector("h2").innerHTML = "Nouveau contenu";

// // // ### 3. Récupère l'élément p juste en dessous de ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

let p = h2.nextElementSibling;
document.querySelector("p").innerHTML = "Nouveau contenu";
console.log(p.innerHTML);

// // // ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console

let section = document.querySelector("section");
if(section.id !== ""){
    console.log(section.id);
}

let sections = document.getElementsByTagName("section");
let firstSection = sections[0];
console.log(firstSection.id);

// // // ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)

let firstH1 = document.querySelector("h1");
console.log(firstH1.className);

let ex5 = document.querySelector("h1");
console.log(ex5.attributes.class.value);

// // // ### 5 bis. Récupère le premier h1 de la section1  et trouve le moyen d'afficher juste le nom de la class dans la console

let firsth1Section = document.querySelector("section");
let first1H1 = firsth1Section.querySelector("h1:first-child");
console.log(first1H1.className);

// // // ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1

let h1Elements = document.querySelectorAll("h1");
h1Elements.forEach(function(h1) {
  console.log(h1.className);
});

// // // ### 7. Trouve une propriété pour afficher tous les attributs du premier input

let input = document.querySelector("input").attributes
console.log(input)

// // // ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input


let firstInput = document.querySelector("input");
let inputType = firstInput.type;
console.log(inputType);

let input1Type = document.querySelector("input").getAttribute("type");
console.log(input1Type);



let submitButton = document.getElementById("btnValidator");

submitButton.addEventListener("click", function() {
  let inputValue = document.getElementById("inputEmail3").value;
  console.log(inputValue);
  alert(inputValue);
});

// // // ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let inputPassword3 = document.getElementById("inputPassword3");
inputPassword3.setAttribute("type", "password");

$("#inputPassword3").attr("type", "password");

let ex9 = document.querySelector("#inputPassword3");
ex9.attributes.type = "password";
console.log(ex9.attributes.type);

// // // ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

$("input:first").attr("type", "color");

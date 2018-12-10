let container = document.createElement("div");//création du container 1
document.body.appendChild(container);
container.style.display = "none"

let container2 = document.createElement("div")//création du container2
document.body.appendChild(container2);
container2.style.display = "none"


let form = document.createElement("form"); //Créer un element form//
container.appendChild(form); //appel l'enfant du body "form"//
container.style.display = "block"



let foreName = document.createElement("label")
form.appendChild(foreName);
foreName.textContent ="Quel est votre prénom ?    "

let textField = document.createElement("input");
form.appendChild(textField);

form.appendChild(document.createElement("br"))
form.appendChild(document.createElement("br"))


let name = document.createElement("label");
form.appendChild(name);
name.textContent= "Quel est votre Nom ?    "

let textFieldName = document.createElement("input");
form.appendChild(textFieldName);

form.appendChild(document.createElement("br"))
form.appendChild(document.createElement("br"))


let buttonOk = document.createElement("input");
buttonOk.type = "button";
buttonOk.value = "OK"
form.appendChild(buttonOk)

let messageError = document.createElement("label");
messageError.textContent = "    Veuillez rentrer votre nom et prénom"
messageError.style.color = "red";
messageError.hidden = true;
form.appendChild(messageError)

buttonOk.addEventListener("click", validation, false);//event listener validating form


function validation(){
  if(foreName == false && name == false){
    messageError.hidden = false;
}  else {
    container.style.display = "none";
    container2.style.display = "block"
  }
}


/*buttonOk.addEventListener("click", ok, false );

function ok(){
  if(foreName === true && name === true){
  }else {
    container.style.display = "none";
    container2.style.display = "block"
  }
}*/

let paragrapheValues = document.createElement("p")
container2.appendChild(paragrapheValues);

let messageValues = document.createElement("label")
paragrapheValues.appendChild(messageValues)
messageValues.textContent = "Bienvenu" + name + " " + foreName;

//---------Exercice 2---------------//

let netSalary = 1;
let grossSalary = 1;


let form2 = document.createElement("form")
container.appendChild(form2)
let exercice2 = document.createElement("p")
form2.appendChild(exercice2);
exercice2.textContent = "Exercice 2"

let labelGrossSalary = document.createElement("label");
form2.appendChild(labelGrossSalary);
labelGrossSalary.textContent = "Salaire mensuel brut   ";


form.appendChild(document.createElement("br"))
form.appendChild(document.createElement("br"))

let fieldGrossSalary = document.createElement("input");
fieldGrossSalary.type = "number"

form2.appendChild(fieldGrossSalary);

form2.appendChild(document.createElement("br"))
form2.appendChild(document.createElement("br"))


let labelNetSalary = document.createElement("label");
form2.appendChild(labelNetSalary);
labelNetSalary.textContent = "Salaire mensuel Net      "

let fieldNetSalary = document.createElement("input");
fieldNetSalary.type = "number"
form2.appendChild(fieldNetSalary)

form2.appendChild(document.createElement("br"))
form2.appendChild(document.createElement("br"))

let grossAnnualSalary = document.createElement("label");
form2.appendChild(grossAnnualSalary);
grossAnnualSalary.textContent = "Salaire annuel brut    "

let fieldGrossAnnualSalary = document.createElement("input")
fieldGrossAnnualSalary.type = "number"

form2.appendChild(fieldGrossAnnualSalary)


form2.appendChild(document.createElement("br"))
form2.appendChild(document.createElement("br"))


let netAnnualSalary = document.createElement("label");
form2.appendChild(netAnnualSalary)
netAnnualSalary.textContent = "Salaire annuel net   "

let fieldNetAnnualSalary = document.createElement("input");
fieldNetAnnualSalary.type = "number"
form2.appendChild(fieldNetAnnualSalary)



fieldGrossSalary.addEventListener("keypress", calculedGrossSalary, false)
fieldNetSalary.addEventListener("keypress", calculedNetSalary, false)

function calculedGrossSalary(){//fonction for calculed net salary
  if( fieldGrossSalary.value){
    fieldNetSalary.value = fieldGrossSalary.value / 1.298;
    fieldGrossSalary.value = fieldNetSalary.value * 1.298;
    fieldNetAnnualSalary.value = fieldGrossSalary.value * 12 / 1.298;
  }

}


function calculedNetSalary() {//fonction for calculed net salary
  if(fieldNetSalary.value){
    fieldGrossSalary.value = fieldNetSalary.value / 12;
    fieldNetSalary.value = fieldGrossSalary.value * 12;
  }
}



//-----Exercice 3---------//


let array = [1,2,3,4,5,6,7,8,9,10];


function evenElement(array) {
  let i = 0; //use then énumeration
  let currentElmnt ; //current Element
  let nbEvenElmnt = 0;
  while (i < array.length) {//variable i = length array
    currentElmnt = array [i];
    i++;
    if (currentElmnt % 2 === 0) {//modulo de 2
      nbEvenElmnt++;//incrémentation
    }
    console.log(nbEvenElmnt)
  }
  return nbEvenElmnt;//return the current element
}
evenElement(array)


//----Exercice 4----//

let array2 = ["Bonjour", "il fait", "ni", "froid", "ni", "chaud"]


function fArray(array2){
  let i = 0;
  let currentElmnt;
  let conjunction;
  let copieConjunction = [];

  while (i < arra2.length) {
    currentElmnt = array2[i];
    i++;
    conjunction = copieConjunction(currentElmnt);
    if(conjunction) {
      copieConjunction.push(currentElmnt);
    }
  }
  return conjunction
}

// exercice 5
function arrayReturn(){
  let myArray = new Array();
  myArray =
}

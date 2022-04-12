function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
let error;
let dataError = document.getElementsByClassName("dataError");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const form = document.querySelector("reserve");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const locationPlace = document.getElementsByTagName("location","location2","location3","location4","location5","location6");
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let locationArray = ["location","location2","location3","location4","location5","location6"];




// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

closeBtn.addEventListener("click", closeModal);

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal(){
  modalbg.style.display = "none";
}

//fonction prénom+message d'erreur

function firstCondition(a){
  if (first.value==""){
  
    alert("Veuillez renseigner un prénom");
    return false;}

  else if (first.length<"2"){
    alert("Veuillez entrer 2 caractères ou plus pour le champ de prénom");
    return false;}

  else {
    return true;}  
}

//fonction nom+message d'erreur

function lastCondition(b){
  if(last.length<"2"){
    alert("Veuillez entrer 2 caractères ou plus pour le champ de nom"); 
    return false;}
  
  else if (last==""){
      alert("Veuillez renseigner un nom");
      return false;}
  
  else {
    return true;}    
}   
 
//fonction email+message d'erreur

function emailCondition(c){
  if (emailValidation.test(email) == false){
    alert("Veuillez renseigner une adresse email valide");
    return false;}

  else {
    return true;}
}
 
//condition date+message d'erreur    

if (birthdate=="") {
  alert("Vous devez entrer votre date de naissance");
}


//condition tournoi+message d'erreur

if (quantity==""){
  alert("Vous devez entrer un nombre");  
}

//condition location+message d'erreur

if (locationArray=""){
  alert("Vous devez choisir une ville");
}

//condition checkbox+message d'erreur

if (checkbox1.checked==false){
  alert("Vous devez vérifier que vous acceptez les termes et conditions.");}
 

// fonction affichage boite message erreur

function revealErrorContainer(r){
  if (a, b, c=false){ 
    dataError = true;}
}

// fonction validate sur Onsubmit

function validate(){
  if(a, b, c=true){
    return true;}
}



   

  




 



 















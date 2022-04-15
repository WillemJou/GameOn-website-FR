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
const errorMessage = document.getElementsByClassName("error_message");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailValidation = document.getElementById("email");
const validateForm = document.getElementById("validate");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
let emailPattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let locationPlace = document.querySelectorAll("location");
let locationArray = ["location","location2","location3","location4","location5","location6"];
let requiredElements = document.querySelectorAll("input[required]");
let validDate = Date.parse('03/17/21');




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







//fonction message d'erreur validation email

function emailValidationCondition(){
  if (emailPattern.test(emailValidation) === false){
    alert("Veuillez renseigner une adresse email valide");
    return false;}

    {return true;}
}



//fonction message d'erreur validation prénom+nom

var nameCondition = function(){
  if(firstName.value.length<2 || lastName.value.length<2){
    alert("Veuillez renseigner au minimum deux caractères");
    return false;}

  { return true;}  
}

//fonction message d'erreur validation birthdate

function birthdateValidation(){
  
  if(validDate=(birthdate)){
    alert("Veuillez entrer une date valide");
    return false;}

  {return true;}  
}

console.log (birthdateValidation());







   

  




 



 















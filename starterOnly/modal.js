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
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const birthdate = document.getElementById("birthdate").value;
const convertBirthdate = Date.parse(birthdate);
let locationPlace = document.querySelectorAll("location");
let locationArray = document.getElementById["location","location2","location3","location4","location5","location6"];
let requiredElements = document.querySelectorAll("input[required]");
let radioButtons = document.querySelectorAll("input[location]");
const sendButtonValidation = document.getElementById("send_button");
const errorMessageFirstname = document.getElementById("error_message_firstname");
const errorMessageLastname = document.getElementById("error_message_lastname");
const errorMessageEmail = document.getElementById("error_message_email");
const errorMessageConditions = document.getElementById("error_message_conditions");
const errorMessageLocations = document.getElementById("error_message_locations");
const errorMessageTournament = document.getElementById("error_message_tournament");
const errorMessageBirthdate = document.getElementById("error_message_birthdate");





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


validateForm.addEventListener("submit", (e)=>{
  
//message d'erreur validation prénom+nom
if(firstName.value.length<2){
  e.preventDefault();
  errorMessageFirstname.style.display ="block";
  }
else {
  errorMessageFirstname.style.display ="none";
}
  if(lastName.value.length<2){
    e.preventDefault();
    errorMessageLastname.style.display ="block";
  }
  else {
    errorMessageLastname.style.display ="none";
  }

//message d'erreur validation email  
  if (emailPattern.test(emailValidation) === false){
    e.preventDefault();
    errorMessageEmail.style.display ="block";
  }
  else {
    errorMessageEmail.style.display ="none";
  }

//message d'erreur validation conditions
  if(checkbox.checked === false){
    e.preventDefault();
    errorMessageConditions.style.display ="block";
  }
  else {
    errorMessageConditions.style.display ="none";
  } 

// validation nombre de tournoi
if(isNaN(quantity)){
  e.preventDefault();
  errorMessageTournament.style.display ="block";
}
else if((quantity.value<0)||(quantity.value>99)){
  e.preventDefault();
  errorMessageTournament.style.display ="block";
}
else{
  errorMessageTournament.style.display ="none";
}

// message erreur validation date de naissance


})      
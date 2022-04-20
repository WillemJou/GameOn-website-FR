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
const email = document.getElementById("email");
const validateForm = document.getElementById("validate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
var letterNumber = /^[0-9a-zA-Z]+$/;





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
  e.preventDefault();
  

// essaye utiliser array
const validateFirstname = (firstName) => {
  return firstName.length > 2 && firstName.value.match(letterNumber);
}
const validateLastname = (lastName) => {
  return lastName.length > 2 && lastName.value.match(letterNumber);
}
const validateEmail = (email) => {
  return (emailPattern.test(email))
}
const validateCheckBox = (checkbox) =>{
  return (checkbox.checked === false)
}

const validateTournament = (quantity) => {
  return (!isNaN(quantity) && quantity.value < 0 || quantity.value > 99);
}
//message d'erreur validation prénom+nom
//message d'erreur validation email  
//message d'erreur validation conditions
// validation nombre de tournoi
// message erreur validation date de naissance


})      
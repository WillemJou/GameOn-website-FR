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
const birthdate = document.querySelector("input[date]");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
let emailPattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let locationPlace = document.querySelectorAll("location");
let locationArray = ["location","location2","location3","location4","location5","location6"];
let requiredElements = document.querySelectorAll("input[required]");
const startDate =  new Date(1899,05,05);
const finalDate =  new Date(2018,05,05);
let radioButtons = document.querySelectorAll("input[location]");
const sendButtonValidation = document.getElementById("send_button");
const errorMessageFirstname = document.getElementById("error_message_firstname");
const errorMessageLastname = document.getElementById("error_message_lastname");
const errorMessageEmail = document.getElementById("error_message_email");






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
  

//fonction message d'erreur validation prénom+nom
  if(firstName.value.length<2){
  e.preventDefault();
  errorMessageFirstname.style.display ="block";
  }
  if(lastName.value.length<2){
    e.preventDefault();
    errorMessageLastname.style.display ="block";
  }
//fonction message d'erreur validation email  
  if (emailPattern.test(emailValidation) === false){
    e.preventDefault();
    errorMessageEmail.style.display ="block";
  }
})
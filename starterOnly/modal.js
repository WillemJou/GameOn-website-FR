// fonction apparition du menu de navigation responsive
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
const errorMessage = document.getElementsByClassName("error_message");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const validateForm = document.getElementById("validate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const birthdate = document.getElementById("birthdate");
const sendButtonValidation = document.getElementById("send_button");
const errorMessageFirstname = document.getElementById("error_message_firstname");
const errorMessageLastname = document.getElementById("error_message_lastname");
const errorMessageEmail = document.getElementById("error_message_email");
const errorMessageConditions = document.getElementById("error_message_conditions");
const errorMessageLocations = document.getElementById("error_message_locations");
const errorMessageTournament = document.getElementById("error_message_tournament");
const errorMessageBirthdate = document.getElementById("error_message_birthdate");
const confirmationMessage = document.getElementById("message_validation");





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

// TimeOut du message de confirmation
const timeOutConfirmMess = setTimeout(closeConfirmationMessage, 3000);

// launch confirmationMessage form 
function launchConfirmationMessage (){
  confirmationMessage.style.display = "flex";
}

//close confirmationMessage form
function closeConfirmationMessage(){
  confirmationMessage.style.display = "none";
}


//fonction générale de soumission d'envoi de formulaire (évenement quand submit)
validateForm.addEventListener("submit", (e)=>{

// fonction validation nom et prénom  
const validateFirstname = (firstName) => {
  return firstName.textLength >= 2 ;
}  
const validateLastname = (lastName) => {
  return lastName.textLength >= 2 ;
}

// functions qui ne marchent pas en commentaire

/*const validateEmail = (email) => {
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return (emailPattern.test(email));
}*/
const validateCheckBox = (checkbox) =>{
  return (checkbox.checked === true)
}
const validateTournament = (quantity) => {
  return (quantity.value >= 1 && quantity.value < 99);
}
/*
const validateBirthdate = (birthdate) => {
  var currentDate = new Date();   
  var majority = currentDate.setFullYear(new Date().getFullYear() - 18);
  var olderAge = currentDate.setFullYear(new Date().getFullYear() - 100);
  return (birthdate > olderAge || birthdate < majority);
}

*/
// tableau objets 
const array = [
  
  {key: firstName,
  fn:()=>validateFirstname(firstName),
  el: errorMessageFirstname,},
  
  {key: lastName,
  fn:()=>validateLastname(lastName),
  el: errorMessageLastname,},

/*  {key: email,
  fn:()=>validateEmail(email),
  el: errorMessageEmail,},

  {key: birthdate,
  fn:()=>validateBirthdate(birthdate),
  el: errorMessageBirthdate,},
*/
  {key: quantity,
  fn:()=>validateTournament(quantity),
  el: errorMessageTournament,}, 


  {key: checkbox,
    fn:()=>validateCheckBox(checkbox),
    el: errorMessageConditions,},
 
 ];

// fonction affichage message d'erreur
array.forEach((item)=>{
  
  item.el.style.display = item.fn() ? "none" : "block";
  // blocage envoi formulaire si erreur
  if (item.fn() === false){
    e.preventDefault();
  }
  // apparition fenetre confirmation formulaire valide pendant 3s (trouver bonne combinaison)
   else if (item.fn() === true){
   validateForm.addEventListener("click", launchConfirmationMessage());
}})




}) 





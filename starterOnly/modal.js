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
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");

let error;
let emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

// conditions champs vides 

if (!first.value ){
  error = "Veuillez renseigner un prénom"
}
if (!last.value ){
  error = "Veuillez renseigner un nom"
}

// condition email invalide 

  if (emailValidation.test(email) == false){
  error = "Veuillez renseigner une adresse email valide"
  }


// condition affichage erreur

// fonction soumettre formulaire 
function validate(){
  if (document.first.
    
    value!=""){
    alert("Merci ! Votre réservation à été reçue.");
    return true;
  }
}





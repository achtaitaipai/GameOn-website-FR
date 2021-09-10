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
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn=document.querySelector(".bground .close");
const submiBtn=document.querySelector(".btn-submit");
const form=document.getElementById("reserve");

let verifs=[
  {id:"first",error:"Veuillez entrer 2 caractères ou plus pour le champ du prénom."},
  {id:"last",error:"Veuillez entrer 2 caractères ou plus pour le champ du nom."},
  {id:"email",error:"Veuillez entrer une adresse email valide."},
  {id:"birthdate",error:"Vous devez entrer votre date de naissance."},
  {id:"quantity",error:"Vous devez préciser à combien de tournoi vous avez participé."},
  {id:"location1",error:"Vous devez préciser votre location."},
  {id:"checkbox1",error:"Vous devez accepter lesconditions d'utilisation."},
]

//launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", ()=>{
  modalbg.classList.add("visible");
}));

//close modal form
modalCloseBtn.addEventListener("click",()=>{
  modalbg.classList.remove("visible");
})

//form submit
submiBtn.addEventListener("click", function (event) {
  //verification of each input
  verifs.forEach(verif => {
    let validity=document.getElementById(verif.id).validity.valid;
    let erreur=validity ? "" : verif.error;
    document.querySelector(`#${verif.id} ~ .error`).innerHTML=erreur;

  });
  // form.checkValidity();
  event.preventDefault()
});

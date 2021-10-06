/*----------------
----Variables--
-----------------*/

//DOM Elements
const modalbg = document.querySelector(".bground");
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");
const submiBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const success = document.querySelector(".success");
const navBtn = document.querySelector(".main-navbar .icon");

//tableau des inputs à verifier avec en id l'id de l'input et en error le texte à afficher en cas d'erreur
let verifs = [
  {
    id: "first",
    error: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  },
  {
    id: "last",
    error: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  },
  { id: "email", error: "Veuillez entrer une adresse email valide." },
  { id: "birthdate", error: "Vous devez entrer votre date de naissance." },
  {
    id: "quantity",
    error:
      "Vous devez préciser à combien de tournoi vous avez participé ce nombre ne peut être compris qu'entre 0 et 10.",
  },
  { id: "location1", error: "Vous devez préciser votre location." },
  {
    id: "checkbox1",
    error: "Vous devez accepter lesconditions d'utilisation.",
  },
];

/*----------------
FONCTIONS ANONYMES
-----------------*/

/*
Définir un minimum et un maximum à l'input date de naissance (entre 5 et 120 ans)
*/
(function () {
  let minAge = 5;
  let maxAge = 120;
  const birthInput = document.getElementById("birthdate");
  let maximum = new Date();
  maximum.setFullYear(maximum.getFullYear() - minAge);
  maximum = dateToString(maximum);
  birthInput.max = maximum;

  let minimum = new Date();
  minimum.setFullYear(minimum.getFullYear() - maxAge);
  minimum = dateToString(minimum);
  birthInput.min = minimum;
})();

/*----------------
------EVENTS------
-----------------*/

/*
Au clique sur l'icone du nav' =>
  *afficher le menu de navigation
*/
navBtn.addEventListener("click", () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

/*
Au clique sur l'un des boutons "je minscris" =>
  *Faire apparaître le modal
*/
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.classList.add("visible");
  })
);

/*
Au clique sur le bouton fermer =>
  *Faire disparaître le modal
*/

modalCloseBtn.addEventListener("click", () => {
  modalbg.classList.remove("visible");
});

/*
Au clique sur le bouton "C'est parti" =>
  lancer la vérification du formulaire
*/
submiBtn.addEventListener("click", formValidation);

/*----------------
-----FONCTIONS-----
-----------------*/

// Transforme un objet date en string ayant pour format : YYYY-MM-DD
function dateToString(date) {
  let year = date.getFullYear();
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
}

//fonction de validation du formulaire
function formValidation(event) {
  //verification de chaque input
  verifs.forEach((verif) => {
    let validity = document.getElementById(verif.id).validity.valid;
    if (validity) {
      document
        .querySelector(`#${verif.id}`)
        .parentElement.removeAttribute("data-error");
      document
        .querySelector(`#${verif.id}`)
        .parentElement.removeAttribute("data-error-visible");
    } else {
      document
        .querySelector(`#${verif.id}`)
        .parentElement.setAttribute("data-error", verif.error);
      document
        .querySelector(`#${verif.id}`)
        .parentElement.setAttribute("data-error-visible", true);
    }
  });
  //si le formulaire est valide
  if (form.checkValidity()) {
    //afficher le message de validation
    success.style.display = "grid";
    //transformer le bouton "c'est partit" en "fermer"
    submiBtn.value = "Fermer";
    //suprimer l'evenement de validation du formulaire
    submiBtn.removeEventListener("click", formValidation);
    //fermer le modal lorsqu'on clique sur le bouton "fermer"
    submiBtn.addEventListener("click", () => {
      modalbg.classList.remove("visible");
      event.preventDefault();
    });
  }
  event.preventDefault();
}

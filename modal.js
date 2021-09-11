function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*----------------
----Variables--
-----------------*/

//DOM Elements
const modalbg = document.querySelector(".bground");
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".bground .close");
const submiBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const success = document.querySelector(".success");

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
------EVENTS------
-----------------*/

/*
Au chargement de la page =>
  -Définir un minimum et un maximum à l'input date de naissance (entre 5 et 120 ans)
*/
window.addEventListener("DOMContentLoaded", () => {
  const birthInput = document.getElementById("birthdate");
  let maximum = new Date();
  maximum.setFullYear(maximum.getFullYear() - 5);
  maximum = dateToString(maximum);
  birthInput.max = maximum;

  let minimum = new Date();
  minimum.setFullYear(minimum.getFullYear() - 120);
  minimum = dateToString(minimum);
  birthInput.min = minimum;
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
  *Vérifier chaque input défini dans "verifs"
    -en cas d'invalidité => faire apparaître l'erreur définie dans "vérifs"
    -dans le cas contraire => Faire disparaître l'erreur potentiellement affichée
  *Si l'ensemble du formulaire est valide => faire disparaître le formulaire et afficher le message de validation
*/
submiBtn.addEventListener("click", function (event) {
  //verification of each input
  verifs.forEach((verif) => {
    let validity = document.getElementById(verif.id).validity.valid;
    let error = validity ? "" : verif.error;
    document.querySelector(`#${verif.id} ~ .error`).innerHTML = error;
  });
  if (form.checkValidity()) {
    success.style.display = "inline-block";
    form.style.display = "none";
  }
  event.preventDefault();
});

/*----------------
------UTILS------
-----------------*/

// Transforme un objet date en string ayant pour format : YYYY-MM-DD
function dateToString(date) {
  let year = date.getFullYear();
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
}

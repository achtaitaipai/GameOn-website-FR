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
const modalCloseBtn=document.querySelector(".bground .close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
modalCloseBtn.addEventListener("click",()=>{
  modalcontent.style.animationName="modalclose";
  modalcontent.style.animationFillMode="forward";
  setTimeout(() => {
    modalbg.style.display="none";
    modalcontent.style.animationName="modalopen";
  }, 800);
})



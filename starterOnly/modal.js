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
// const submitBtn=document.querySelector()

//launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", ()=>{
  // modalbg.style.display = "block";
  console.log("oe")
  modalbg.classList.add("visible");
}));


//close modal form
modalCloseBtn.addEventListener("click",()=>{
  // modalcontent.style.animationName="modalclose";
  // modalcontent.style.animationFillMode="forward";
  // setTimeout(() => {
  //   modalbg.style.display="none";
  //   modalcontent.style.animationName="modalopen";
  // }, 750);
  modalbg.classList.remove("visible");
})



// nav logo tranformation
let nav_logo=document.querySelector(".logo");
nav_logo.addEventListener("click",()=>{
  window.location.href = "index.html";
});

// language button logic here
let lang_btn=document.querySelector(".language_icon");
let lang_container=document.querySelector(".language_container");
lang_btn.addEventListener("click",()=>{
    console.log("language btn was clicked");
    if(lang_container.style.display==="none"){
        lang_container.style.display="block";
    }else{
        lang_container.style.display="none";
    }

});

// ----- menu button ------
function open_menu_section() {
  window.location.href = "tesla_menu.html";
}

// ----- sign in button ------
function signin() {
  window.location.href = "tesla_signIn.html";
  console.log("sign in button was clicked");
}

// ----- sign in button ------
function signin() {
  window.location.href = "tesla_signIn.html";
  console.log("sign in button was clicked");
}

// tesla support specifications

function tesla_support(){
  window.location.href = "tesla_support.html";
  console.log("tesla support button was clicked");
}

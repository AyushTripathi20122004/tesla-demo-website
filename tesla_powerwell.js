// nav logo tranformation
let nav_logo=document.querySelector(".logo");
nav_logo.addEventListener("click",()=>{
  window.location.href = "index.html";
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

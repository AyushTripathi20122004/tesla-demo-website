// ----- menu button ---------
function open_menu_section() {
  window.location.href = "tesla_menu.html";
}

// function for all cards here
function modelY(){
    console.log("modelY btn was clicked");
    let imgage=document.querySelector(".car_images");
    
    imgage.style.backgroundImage='url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-Y-Standard-Desktop-Dynamic-Asset.jpg")';
    imgage.style.transition="background-image 1s ease-out";
}
function model3(){
    console.log("model3 btn was clicked");
    let imgage=document.querySelector(".car_images");
    imgage.style.backgroundImage='url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-3-Standard-Desktop.jpg")';
    imgage.style.transition="background-image 1s ease-out";
}
function cbt(){
    console.log("model3 btn was clicked");
    let imgage=document.querySelector(".car_images");
    imgage.style.backgroundImage='url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Cybertruck-Desktop-US-v2.jpg")';
    imgage.style.transition="background-image 1s ease-out";
}
function modelX(){
    console.log("model3 btn was clicked");
    let imgage=document.querySelector(".car_images");
    imgage.style.backgroundImage='url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-X-New-Desktop-US-v4.jpg")';
    imgage.style.transition="background-image 1s ease-out";
}

function modelS(){
    console.log("model3 btn was clicked");
    let imgage=document.querySelector(".car_images");
    imgage.style.backgroundImage='url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-S-Desktop-US-v3.jpg")';
    imgage.style.transition="background-image 1s ease-out";
}




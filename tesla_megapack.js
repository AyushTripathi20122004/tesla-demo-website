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




//-------------ScrollCard_btn creation--------------

let scrollCard = document.querySelectorAll(".s_card");
let ScrollCard_btn = document.querySelector(".scrollCard_btn");

scrollCard.forEach((_,j)=>{
    let btn=document.createElement("button");
    btn.classList.add("scrollBtn")
    btn.classList.add("rounded-full");
    btn.classList.add("bg-gray-300");
    btn.classList.add("p-2");
    ScrollCard_btn.appendChild(btn);
    console.log('btn created');
    
});

let index=0 // common index

let mg_card4Scroll=document.querySelector(".mg_card4Scroll")



let Btn=document.querySelectorAll(".scrollBtn")
Btn[0].style.backgroundColor="#5c5e62"

Btn.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
    console.log('btn clicked')
    index=i
    scrollCard_fcn()
})
})

let btnCard=document.querySelector(".btnCard")
let leftBtn=document.querySelector(".left_btn")
let RightBtn=document.querySelector(".right_btn")


leftBtn.addEventListener("click",()=>{
    if (index>0){
        index-=1
        scrollCard_fcn() 
    }
})

RightBtn.addEventListener("click",()=>{
    if (index<4){
        index+=1
        scrollCard_fcn() 
    }
})


// scrolling window updation  function
let scrollCard_fcn=()=>{
    mg_card4Scroll.style.transform=`translateX(-${index*30}%)`;
    Btn.forEach(b=>b.style.backgroundColor="");
    Btn[index].style.backgroundColor="#5c5e62";

}

















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

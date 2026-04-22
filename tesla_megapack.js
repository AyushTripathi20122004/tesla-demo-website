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


// video pause1 and play code here

let video1=document.querySelector(".Introvideo")
let videoBtn1=document.querySelector(".videoCardBtn1");
function pausePlay1(){
   if (!video1.paused) {
        video1.pause();
        videoBtn1.innerHTML=`<svg class="h-6 text-white w-6 tds-icon tds-icon-play-filled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M19.057 13.62 6.815 20.747c-1.248.72-2.808-.18-2.808-1.62V4.874c0-1.44 1.56-2.34 2.808-1.62l12.242 7.125c1.247.72 1.247 2.521 0 3.242z"></path></svg>`
    } else {
        video1.play();
        videoBtn1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"  fill="white" class=" h-6 text-white w-6  bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`
    }
}


// video pause2 and play code here

let video2=document.querySelector(".Battryvideo")
let videoBtn2=document.querySelector(".videoCardBtn2");
function pausePlay2(){
   if (!video2.paused) {
        video2.pause();
        videoBtn2.innerHTML=`<svg class="h-6 text-white w-6 tds-icon tds-icon-play-filled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M19.057 13.62 6.815 20.747c-1.248.72-2.808-.18-2.808-1.62V4.874c0-1.44 1.56-2.34 2.808-1.62l12.242 7.125c1.247.72 1.247 2.521 0 3.242z"></path></svg>`
    } else {
        video2.play();
        videoBtn2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"  fill="white" class=" h-6 text-white w-6  bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`
    }
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

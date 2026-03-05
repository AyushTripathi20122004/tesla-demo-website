// select region dropdown list 1 
let drop_down_btn=document.querySelector(".dropdown_icon");
let dropdown_list=document.querySelector(".dropdown_list");
drop_down_btn.addEventListener("click",()=>{
    if(dropdown_list.style.display==="none"){
        dropdown_list.style.display="block";
    }
    else{
        dropdown_list.style.display="none";
    }
});

// select language dropdown list 2
let drop_down_btn2=document.querySelector(".dropdown_icon2");
let dropdown_list2=document.querySelector(".dropdown_list2");
drop_down_btn2.addEventListener("click",()=>{
    if(dropdown_list2.style.display==="none"){
        dropdown_list2.style.display="block";
    }
    else{
        dropdown_list2.style.display="none";
    }
});

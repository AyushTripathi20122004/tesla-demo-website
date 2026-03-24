// vehical and energy card code here

let vehical_btn= document.querySelector(".vehical_container");
let energy_btn= document.querySelector(".energy_container");
let vehical_card=document.querySelector(".v_e_info1");
let energy_card=document.querySelector(".v_e_info2");

// default energy card display none
energy_card.style.display="none";
vehical_btn.style.borderBottom="4px solid #171a20";

vehical_btn.addEventListener("click",()=>{
    if(energy_card.style.display="block"){
        energy_card.style.display="none";
        vehical_card.style.display="grid";
        vehical_btn.style.borderBottom="4px solid #171a20";
        energy_btn.style.borderBottom="none";
    }
});

energy_btn.addEventListener("click",()=>{
    if(vehical_card.style.display="block"){
        vehical_card.style.display="none";
        energy_card.style.display="grid";
        energy_btn.style.borderBottom="4px solid #171a20";
        vehical_btn.style.borderBottom="none";
    }
});
// ----- menu button ------
function open_menu_section() {
  window.location.href = "tesla_menu.html";
}




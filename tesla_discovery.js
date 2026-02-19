// sliding window button code is here

let card=document.querySelectorAll(".card");
let btn_section=document.querySelector(".card_sliding_btn_base");
let n=card.length;
let card_base=document.querySelector(".card_base");

// btn creation here

for(let i=0;i<n;i++){
    let btn=document.createElement("button");
    btn.classList.add("card_sliding_btn");
    btn_section.appendChild(btn);
}

// sliding transformation here


let sliding_btn=document.querySelectorAll(".card_sliding_btn")
sliding_btn[0].style.backgroundColor = "#171a20";
sliding_btn.forEach((btn,k)=>{
    btn.addEventListener("click",()=>{
        let left_btn=document.querySelector(".left_btn");
        let right_btn=document.querySelector(".right_btn");
        let right_left_btn=document.querySelector(".right_left_btn");
        if(k==0){
            left_btn.style.display="none";
            right_left_btn.style.justifyContent="flex-end";
        }
        else{
            left_btn.style.display="block";
            right_left_btn.style.justifyContent="space-between";
        }

        if(k==n-1){
            right_btn.style.display="none";
        }
        else{
            right_btn.style.display="block";
        }
        card_base.style.transform=`translateX(-${k*40}vw)`;
        sliding_btn.forEach(b=>b.style.backgroundColor="");
        btn.style.backgroundColor = "#171a20";
    });
    
});




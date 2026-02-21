// ----- menu button ------
function open_menu_section() {
  window.location.href = "tesla_menu.html";
}

// sliding window button code is here

let card = document.querySelectorAll(".card");
let btn_section = document.querySelector(".card_sliding_btn_base");
let n = card.length;
let card_base = document.querySelector(".card_base");

// btn creation here
for (let i = 0; i < n; i++) {
    let btn = document.createElement("button");
    btn.classList.add("card_sliding_btn");
    btn_section.appendChild(btn);
}

// select right and left sliding btn
let left_btn = document.querySelector(".left_btn");
let right_btn = document.querySelector(".right_btn");
let right_left_btn = document.querySelector(".right_left_btn");

// remove left btn initially
left_btn.style.display = "none";
right_left_btn.style.justifyContent = "flex-end";

let sliding_btn = document.querySelectorAll(".card_sliding_btn");
sliding_btn[0].style.backgroundColor = "#171a20";

// 👉 Track current slide
let currentIndex = 0;

// 👉 Function to update UI
function updateSlider() {

    // Move slider
    card_base.style.transform = `translateX(-${currentIndex * 40}vw)`;

    // Update dot color
    sliding_btn.forEach(b => b.style.backgroundColor = "");
    sliding_btn[currentIndex].style.backgroundColor = "#171a20";

    // Hide left button if first card
    if (currentIndex === 0) {
        left_btn.style.display = "none";
        right_left_btn.style.justifyContent = "flex-end";
    } else {
        left_btn.style.display = "block";
        right_left_btn.style.justifyContent = "space-between";
    }

    // Hide right button if last card
    if (currentIndex === n - 1) {
        right_btn.style.display = "none";
    } else {
        right_btn.style.display = "block";
    }
}

// 👉 Dot button click
sliding_btn.forEach((btn, k) => {
    btn.addEventListener("click", () => {
        currentIndex = k;
        updateSlider();
    });
});

// 👉 Right button click
right_btn.addEventListener("click", () => {
    if (currentIndex < n - 1) {
        currentIndex++;
        updateSlider();
    }
});

// 👉 Left button click
left_btn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

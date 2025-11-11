let cardContainer = document.querySelector(".moving_window"); // parent of all cards
let cards = document.querySelectorAll(".car_model_card");
let buttonSection = document.querySelector(".card_moving_button");
let n = cards.length;

// Create buttons dynamically
for (let i = 0; i < n; i++) {
    let btn = document.createElement("button");
    btn.classList.add("button");
    buttonSection.appendChild(btn);
}

// Button functionality
let buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor="#171a20"

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        // Move the container, not the NodeList
        cardContainer.style.transform = `translateX(-${i * 750}px)`; // adjust 400px per card width

        // Optional: update button styles
        buttons.forEach(btn => btn.style.backgroundColor = "");
        button.style.backgroundColor = "#171a20";
    });
});


// video pause buttton functionality
function pause() {
  let btn = document.getElementById("pauseBtn");

  if (btn.classList.contains("fa-pause")) {
    // Pause → Play
    btn.classList.remove("fa-pause");
    btn.classList.add("fa-play");
  } else {
    // Play → Pause
    btn.classList.remove("fa-play");
    btn.classList.add("fa-pause");
  }
}



// ---------card2 scrolling buttons--------

let card2 = document.querySelectorAll(".card2"); 
let card2_scrolling_btn_section = document.querySelector(".card2_scrolling_btn_section");

// Create buttons dynamically
for (let j = 0; j < card2.length; j++) {
  let btn2 = document.createElement("button");
  btn2.classList.add("card2_scroll_btn");
  card2_scrolling_btn_section.appendChild(btn2);
}

// ----card2 buttons functionality------
let card2_base = document.querySelector(".card2_base");
let card2_btn = document.querySelectorAll(".card2_scroll_btn");

// Set first one active
card2_btn[0].style.backgroundColor = "#171a20";

card2_btn.forEach((btn, j) => {
  btn.addEventListener("click", () => {
    
    // Move the slider
    card2_base.style.transform = `translateX(-${j * 490}px)`; // Adjust width if needed

    // Remove active color from all
    card2_btn.forEach(b => b.style.backgroundColor = "");

    // Set current active
    btn.style.backgroundColor = "#171a20";
  });
});





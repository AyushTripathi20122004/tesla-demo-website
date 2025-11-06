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
        cardContainer.style.transform = `translateX(-${i * 670}px)`; // adjust 400px per card width

        // Optional: update button styles
        buttons.forEach(btn => btn.style.backgroundColor = "");
        button.style.backgroundColor = "#171a20";
    });
});



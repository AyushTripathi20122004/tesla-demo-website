document.addEventListener("DOMContentLoaded", () => {

  // ----- heading image transition -----
  const car_adv_base = document.querySelector(".new_car_adv_base");
  const car_cards = document.querySelectorAll(".new_car_adv");
  const btn_section = document.querySelector(".pic_cange_section");

  if (car_adv_base && btn_section && car_cards.length) {
    car_cards.forEach((_, k) => {
      const btn = document.createElement("button");
      btn.classList.add("pic_change");
      btn_section.appendChild(btn);
    });

    const pic_change_btn = document.querySelectorAll(".pic_change");
    // DEFAULT ACTIVE BUTTON
    if (pic_change_btn.length) pic_change_btn[0].style.backgroundColor = "#171a20";

    pic_change_btn.forEach((btn, k) => {
      btn.addEventListener("click", () => {
        car_adv_base.style.transform = `translateX(-${k * 100}vw)`;
        pic_change_btn.forEach(b => b.style.backgroundColor = "");
        btn.style.backgroundColor = "#171a20";
      });
    });
  }

  // ----- car model transition -----
  const cardContainer = document.querySelector(".moving_window");
  const cards = document.querySelectorAll(".car_model_card");
  const buttonSection = document.querySelector(".card_moving_button");

  if (cardContainer && buttonSection && cards.length) {
    cards.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.classList.add("button");
      buttonSection.appendChild(btn);
    });

    const buttons = document.querySelectorAll(".button");
    // DEFAULT ACTIVE BUTTON
    if (buttons.length) buttons[0].style.backgroundColor = "#171a20";

    buttons.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        cardContainer.style.transform = `translateX(-${i * 68}vw)`;
        buttons.forEach(b => b.style.backgroundColor = "");
        btn.style.backgroundColor = "#171a20";
      });
    });
  }

  // ----- video pause/play toggle -----
  function toggleVideo() {
    const btn = document.getElementById("pauseBtn");
    const video = document.getElementById("video");

    if (!btn || !video) return;

    if (video.paused) {
      video.play();
      btn.classList.remove("fa-play");
      btn.classList.add("fa-pause");
    } else {
      video.pause();
      btn.classList.remove("fa-pause");
      btn.classList.add("fa-play");
    }
  }

  // Make toggleVideo globally accessible for onclick
  window.toggleVideo = toggleVideo;

  // --------- card2 scrolling buttons --------
  const card2 = document.querySelectorAll(".card2");
  const card2_scrolling_btn_section = document.querySelector(".card2_scrolling_btn_section");
  const card2_base = document.querySelector(".card2_base");

  if (card2.length && card2_scrolling_btn_section && card2_base) {
    card2.forEach((_, j) => {
      const btn2 = document.createElement("button");
      btn2.classList.add("card2_scroll_btn");
      card2_scrolling_btn_section.appendChild(btn2);
    });

    const card2_btn = document.querySelectorAll(".card2_scroll_btn");
    // DEFAULT ACTIVE BUTTON
    if (card2_btn.length) card2_btn[0].style.backgroundColor = "#171a20";

    card2_btn.forEach((btn, j) => {
      btn.addEventListener("click", () => {
        card2_base.style.transform = `translateX(-${j * 43}vw)`;
        card2_btn.forEach(b => b.style.backgroundColor = "");
        btn.style.backgroundColor = "#171a20";
      });
    });
  }

});

// ----- menu button ------
function open_menu_section() {
  window.location.href = "tesla_menu.html";
}

// Model 3 car specifications
function model_3() {
  window.location.href = "tesla_model3.html";
  console.log("model3 button was clicked");
}
// Model Y car specifications
function model_Y() {
  window.location.href = "tesla_modelY.html";
  console.log("modelY button was clicked");
}
// Model CT car specifications
function model_CT() {
  window.location.href = "tesla_modelCT.html";
  console.log("modelCT button was clicked");
}

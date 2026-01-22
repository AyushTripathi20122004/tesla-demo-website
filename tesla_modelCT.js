let currentIndex = 0;

const list_image = [
    "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/CYBERTRUCK/CT-Configurator-Hero-All-Wheel-Drive-20inch-Core-Desktop.jpg?&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC07,$WH0A,$IG05&view=STUD_SIDEVIEW&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC07,$WH0A,$IG05&view=STUD_REAR34&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTC07,$WH0A,$IG05&view=STUD_RIMCLOSEUP&model=ct&size=1920&bkba_opt=4&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IG05,$MTC07&view=INTERIOR_ROW1&model=ct&size=1920&bkba_opt=1&crop=0,0,0,0&overlay=0&",
    "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/CYBERTRUCK/CT-Configurator-Towing-Desktop.jpg?&",
    "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/CYBERTRUCK/powershare_home_backup_02.jpg?&",
    "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/CYBERTRUCK/terrestrial_gallery.jpeg?&"
];

const card = document.querySelector('.card');

// Update image
function updateImage() {
    card.style.backgroundImage = `url("${list_image[currentIndex]}")`;
}

// 👉 Buttons (NO animation)
function right_btn() {
    card.style.transition = "none";
    currentIndex = (currentIndex + 1) % list_image.length;
    updateImage();
}

function left_btn() {
    card.style.transition = "none";
    currentIndex = (currentIndex - 1 + list_image.length) % list_image.length;
    updateImage();
}

// 👉 Auto slide (WITH animation)
setInterval(() => {
    card.style.transition = "background-image 2s ease-in";
    currentIndex = (currentIndex + 1) % list_image.length;
    updateImage();
}, 5000);

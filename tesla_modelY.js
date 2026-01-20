let currentIndex = 0;

const list_image = [
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY61,$PN01,$WY19P,$IBB3&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY61,$PN01,$WY18P,$IBB3&view=SIDE&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY61,$PN01,$WY18P,$IBB3&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY61,$PN01,$WY18P,$IBB3&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=2&crop=0,0,80,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY61,$IBB3,$PN01,$STY5B&view=STUD_SEAT&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB3,$MTY61,$STY5B&view=INTERIOR_ROW2&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&"
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

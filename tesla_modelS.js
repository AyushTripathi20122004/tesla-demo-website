let currentIndex = 0;

const list_image = [
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS22,$PN01,$WS93,$IBE01&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS22,$PN01,$WS93,$IBE01&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS22,$PN01,$WS93,$IBE01&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS22,$PN01,$WS93,$IBE01&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS22,$PN01,$IBE01,$ST06&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&"
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

let currentIndex = 0;

const list_image = [
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_FRONT34&model=m3&size=1920",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_SIDEVIEW&model=m3&size=1920",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_REAR34&model=m3&size=1920",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_RIMCLOSEUP&model=m3&size=1920",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB4,$PN01,$MT367&view=STUD_INTERIOR&model=m3&size=1920",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB4,$MT367&view=INTERIOR_ROW2&model=m3&size=1920"
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

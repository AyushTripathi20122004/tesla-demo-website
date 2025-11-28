let currentIndex = 0;  // Track the current image index

const list_image = [
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_SIDEVIEW&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_REAR34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT367,$PN01,$W38C,$IBB4&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=2&crop=0,0,80,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB4,$PN01,$MT367&view=STUD_INTERIOR&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&",
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB4,$MT367&view=INTERIOR_ROW2&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&"
];

// Function to update the image
function updateImage() {
    const card = document.querySelector('.card');
    card.style.backgroundImage = `url('${list_image[currentIndex]}')`;
}

// Right button click handler
function right_btn() {
    const card = document.querySelector('.card');
    currentIndex = (currentIndex + 1) % list_image.length;
    card.style.transition="none";
    updateImage();
}

// Left button click handler
function left_btn() {
    currentIndex = (currentIndex - 1 + list_image.length) % list_image.length;
    updateImage();
}

// Set an interval to automatically update the image every 3 seconds
setInterval(function(){
    currentIndex=(currentIndex+1)%list_image.length;
    const card = document.querySelector('.card');
    card.style.transition="background-image 2s ease-in";
    updateImage();
},5000);  // Change image every 3000 milliseconds (3 seconds)

// Event listeners for the buttons (make sure you have these buttons in your HTML)
document.querySelector('.arrow_button_right').addEventListener('click', right_btn);
document.querySelector('.arrow_button_left').addEventListener('click', left_btn);

// Initialize the first image
updateImage();


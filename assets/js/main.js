function toggleMenu() {
    let siteNav = document.getElementsByClassName('site-nav')[0];
    toggleClass(siteNav, 'open');
}

// Gallery
function overlayImage(sourceImage) {
    addClass(document.body, 'overlay-open');
    galleryUpdateImage(sourceImage);
}

function closeOverlay() {
    let activeImage = document.getElementsByClassName('active-image')[0];
    removeClass(document.body, 'overlay-open');
    removeClass(activeImage, 'active-image');
}

function galleryPrev() {
    let activeImage = document.getElementsByClassName('active-image')[0];
    let newImage = activeImage.parentElement.previousElementSibling;
    if (newImage) {
        galleryUpdateImage(newImage.firstElementChild);
    }
}

function galleryNext() {
    let activeImage = document.getElementsByClassName('active-image')[0];
    let newImage = activeImage.parentElement.nextElementSibling;
    if (newImage) {
        galleryUpdateImage(newImage.firstElementChild);
    }
}

function galleryUpdateImage(sourceImage) {
    let activeImage = document.getElementsByClassName('active-image')[0];
    removeClass(activeImage, 'active-image');
    addClass(sourceImage, 'active-image');
    let overlayImage = document.getElementById('gallery-image');
    overlayImage.src = sourceImage.src;
    overlayImage.alt = sourceImage.alt;
}

// Utilities
function toggleClass(element, className) {
    if (element){
        element.classList.toggle(className);
    }
}

function removeClass(element, className) {
    if (element){
        element.classList.toggle(className, false);
    }
}

function addClass(element, className){
    if (element){
        element.classList.toggle(className, true);
    }
}

function showMessage(messageText, type) {
    let message = document.getElementById('message');
    message.innerHTML = messageText;
    message.className = "";
    addClass(message, 'is-visible');
    addClass(message, type);
    setTimeout(function(){
        removeClass(message, 'is-visible');
        addClass(message, 'is-hidden');
        setTimeout(function(){
            removeClass(message, 'is-hidden');
            addClass(message, 'is-removed');
        }, 2000);
    }, 3000)
}

formcarry({
    form: "BuYoUtgWC0",
    element: "#contact-us",
    // extraData: {
    //   // add whatever you want
    //   screenSize: `${window.screen.width}x${window.screen.height}`,
    //   language: window.navigator.language,
    // },
    onSuccess: function(response){
        console.log(response);
        showMessage("Success", "success");
    },
    onError: function(error){
        console.log(error);
        showMessage("Error", "error");
    }
  });
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

formcarry({
    form: "BuYoUtgWC0",
    element: "#contactus",
    // extraData: {
    //   // add whatever you want
    //   screenSize: `${window.screen.width}x${window.screen.height}`,
    //   language: window.navigator.language,
    // },
    onSuccess: function(response){
      alert(response)
    },
    onError: function(error){
      alert(error)
    }
  });
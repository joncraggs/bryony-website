function toggleMenu() {
    let siteNav = document.getElementsByClassName('site-nav')[0];
    toggleClass(siteNav, 'open');
}

function overlayImage(sourceImage) {
    addClass(document.body, 'overlay-open');
    let overlayImage = document.getElementById('gallery-image');
    overlayImage.src = sourceImage.src;
    overlayImage.alt = sourceImage.alt;
}

function closeOverlay() {
    removeClass(document.body, 'overlay-open')
}

function toggleClass(element, className) {
    if (element.classList.contains(className)){
        element.classList.remove(className);
    }
    else {
        element.classList.add(className);
    }
}

function removeClass(element, className) {
    if (element && element.classList.contains(className)){
        element.classList.remove(className);
    }
}

function addClass(element, className){
    if (element && !element.classList.contains(className)){
        element.classList.add(className);
    }
}
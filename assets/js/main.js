function toggleMenu() {
    let siteNav = document.getElementsByClassName('site-nav')[0];
    if (siteNav.classList.contains('open')){
        siteNav.classList.remove('open');
    }
    else {
        siteNav.classList.add('open');
    }
}
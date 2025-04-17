// Ouvrir la modal
let btnshare = document.querySelector('.share-btn');
btnshare.addEventListener('click', function () {
    document.body.classList.add('has-share');
});


// Fermer la modal
let btnCloseModal = document.querySelector('.closeModal');
btnCloseModal.addEventListener('click', function () {
    document.body.classList.remove('has-share');
});


let openMainNavBtn = document.querySelector('.header-burger');
let closeMainNavBtn = document.querySelector('.header-close');
let headerNav = document.querySelector('.header-nav');

if (closeMainNavBtn) {
    closeMainNavBtn.addEventListener('click', function() {
        closeMenuMobile();
    })
}
if (openMainNavBtn) {
    openMainNavBtn.addEventListener('click', function() {
        openMenuMobile();
    })
}
function openMenuMobile() {
    headerNav.classList.add('open');
    document.querySelector('.overlay-menu-mobile').classList.add('open');
} 

function closeMenuMobile() {
    
    headerNav.classList.add('transition');
    
    setTimeout(() => {
        headerNav.classList.remove('open');
        headerNav.classList.remove('transition');
        document.querySelector('.overlay-menu-mobile').classList.remove('open');
      }, 300);
      
} 
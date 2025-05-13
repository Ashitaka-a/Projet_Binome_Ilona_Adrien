// Ouvrir la modal
let btnshare = document.querySelector('.share-btn');
if (btnshare) {
    btnshare.addEventListener('click', function () {
        document.body.classList.add('has-share');
    });
}

// Fermer la modal
let btnCloseModal = document.querySelector('.closeModal');
if (btnCloseModal) {
    btnCloseModal.addEventListener('click', function () {
        document.body.classList.remove('has-share');
    });
}

let openMainNavBtn = document.querySelector('.header-burger');
let closeMainNavBtn = document.querySelector('.header-close');
let headerNav = document.querySelector('.header-nav');

if (closeMainNavBtn) {
    closeMainNavBtn.addEventListener('click', function () {
        closeMenuMobile();
    })
}
if (openMainNavBtn) {
    openMainNavBtn.addEventListener('click', function () {
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


// Fonction pour calculer et afficher la différence
function afficherDifferenceAnnees() {

    const anneePublication = 2022;

    const anneeActuelle = new Date().getFullYear();
    const difference = anneeActuelle - anneePublication;

    const divDate = document.getElementById('date-diff');
    divDate.textContent = (`Publié il y a ${difference} an${difference > 1 ? 's' : ''}.`);
}
afficherDifferenceAnnees()

// Compteur de likes

const likeCount = document.querySelector(".compteur");
let like = 0;
let messageAffiche = false;

function btn_like(e) {
    e.preventDefault();
    like++;
    console.log(like);
    document.querySelector(".compteur").textContent = like;
    messageSpecial();
}
function messageSpecial() {
    if (like > 5 && !messageAffiche) {
        alert("Vous aimez vraiment cet article !");
        messageAffiche = true;
        return;
    }
}
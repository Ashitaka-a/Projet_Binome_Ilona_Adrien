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



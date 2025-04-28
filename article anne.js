

// Fonction pour calculer et afficher la différence

function afficherDifferenceAnnees() {
    const anneePublication = 2022;
    const anneePublication = 2025;
    const anneeActuelle = new Date().getFullYear();
    const difference = anneeActuelle - anneePublication;

    const divDate = document.getElementById('date-diff');
    divDate.textContent = `Publié il y a ${difference} an${difference > 1 ? 's' : ''}.`;
}
afficherDifferenceAnnees();
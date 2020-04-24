// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    const now = new Date();


    const seconds = now.getSeconds();
    const secondsDegrees = (seconds*6);
    AIGUILLESEC.style.transform = `rotate(${secondsDegrees}deg)`;



      const mins = now.getMinutes();
    const minsDegrees = (mins * 6 + (seconds / 10));
    AIGUILLEMIN.style.transform = `rotate(${minsDegrees}deg)`;



    const hour = now.getHours();
    const hourDegrees = (hour * 30 + (mins / 2));
    AIGUILLEHR.style.transform = `rotate(${hourDegrees}deg)`;



}
// Exercuter la fonction chaque second

setInterval(demarrerLaMontre, 1000);
demarrerLaMontre();
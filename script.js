const button = document.querySelector('#submit');
const container = document.querySelector ("#answer-container");
const API_URL = 'https://answerbook.david888.com/?lang=en';
const speachbubble = document.querySelector("#answer-container");

button.addEventListener('click', async () => {
    const data = await fetchData(API_URL);
    showData(data);
});


// const myData = await fetchData(API_URL);
// console.log (myData);



// showData();

async function fetchData (url) {
    try {
        const response = await fetch(url);
        let jsObject = await response.json();
        return jsObject;
    } catch (e) {
        console.error(e);
        return [];

    }
}


function showData (myData){
    speachbubble.classList.add("active");
    console.log(myData.answer);
    container.innerHTML = `${myData.answer}`;
    setTimeout(() => {
        speachbubble.classList.remove("active");
        container.innerHTML = "";
    }, 5000);
    
}

const libelle = document.querySelector(".libelle");

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;
let speedX = 3;
let speedY = 2.5;
let angle = 90;

// alle paar Sekunden soll sie zufällig ein bisschen drehen
let nextSpin = Date.now() + 1000;

function moveLibelle() {
  posX += speedX;
  posY += speedY;

  // Bildschirmrand-Kollision: Richtung umkehren
  if (posX <= 0 || posX + 100 >= window.innerWidth) {
    speedX *= -1;
  }
  if (posY <= 0 || posY + 100 >= window.innerHeight) {
    speedY *= -1;
  }

  // Zufällige kleine Drehung zwischendurch
  const now = Date.now();
  if (now > nextSpin) {
    // Winkel zufällig um ±15 bis ±90 Grad ändern
    angle += (Math.random() - 0.5) * 180;
    nextSpin = now + 1000 + Math.random() * 2000; // alle 1–3 Sekunden
  }

  // Bewegung + Rotation + Flip bei Links-/Rechtsflug
  const flip = speedX < 0 ? -1 : 1;
  libelle.style.transform = `translate(0, 0) scaleX(${flip}) rotate(${angle}deg)`;

  // Neue Position setzen
  libelle.style.left = `${posX}px`;
  libelle.style.top = `${posY}px`;

  requestAnimationFrame(moveLibelle);
}

requestAnimationFrame(moveLibelle);



const libelle2 = document.querySelector('.libelle2');

function moveLibelle2Randomly() {
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  // Zufällige Positionen innerhalb des Bildschirms
  const randomX = Math.random() * (maxWidth - 100);
  const randomY = Math.random() * (maxHeight - 100);

  // Zufällige Drehung
  const randomRotation = Math.random() * 720 - 360; // -360° bis +360°

  // Bewegung + Drehung kombinieren
  libelle2.style.left = `${randomX}px`;
  libelle2.style.top = `${randomY}px`;
  libelle2.style.transform = `rotate(${randomRotation}deg) scale(${Math.random() * 0.3 + 0.85})`;
}

// Alle 2–3 Sekunden zufällig bewegen
setInterval(moveLibelle2Randomly, 2000);

// Initiale Position setzen
moveLibelle2Randomly();


// let zahl = 200;
// let text1 = "Melissa" + zahl;
// console.log(text1);
// let text2 = `Melissa ${zahl};`
// console.log (text2);

let currentEnigme = 1;
let seconds = 0;
let timer = null;
let totalEnigmes = 12;

function payGame() {
  document.getElementById("paymentSection").style.display = "none";
  document.getElementById("startSection").style.display = "block";
}

function useCode() {
  const code = document.getElementById("codeInput").value.trim();
  if (code === "GRATUIT") {
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("startSection").style.display = "block";
  } else {
    alert("Code invalide.");
  }
}

function startGame() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      document.getElementById("chrono").innerText = "Temps : " + seconds + "s";
    }, 1000);
  }

  document.getElementById("startSection").style.display = "none";
  document.getElementById("chrono").style.display = "block";
  document.getElementById("scannerButton").style.display = "block";
  showEnigme(currentEnigme);
}

function toggleCarte() {
  const carte = document.getElementById("carte-container");
  carte.style.display = carte.style.display === "none" ? "block" : "none";
}

function showEnigme(number) {
  const gameZone = document.getElementById("gameZone");
  gameZone.style.display = "block";

  if (number === 11) {
    // Enigme audio
    gameZone.innerHTML = `
      <h2>Énigme ${number}</h2>
      <audio controls>
        <source src="assets/enigmes/enigme11.m4a" type="audio/mp4" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>
    `;
  } else if (number === 13) {
    // Fin
    clearInterval(timer);
    gameZone.innerHTML = `
      <h2>Fin du jeu</h2>
      <embed src="assets/enigmes/Fin.pdf" type="application/pdf" width="100%" height="600px" />
      <p>Temps total : ${seconds} secondes</p>
    `;
    document.getElementById("scannerButton").style.display = "none";
  } else {
    // PDF classique
    gameZone.innerHTML = `
      <h2>Énigme ${number}</h2>
      <embed src="assets/enigmes/enigme${number}.pdf" type="application/pdf" width="100%" height="600px" />
    `;
  }
}

function nextEnigme() {
  if (currentEnigme < totalEnigmes) {
    currentEnigme++;
    showEnigme(currentEnigme);
  } else {
    currentEnigme = 13;
    showEnigme(currentEnigme);
  }
}


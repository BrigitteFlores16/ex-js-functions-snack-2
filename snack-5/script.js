//Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
  let intervalId = setInterval(() => console.log(messaggio), 1000);
  return intervalId;
}
let id = stampaOgniSecondo("hello, stampata ogni secondo!");
setTimeout(() => {
  clearInterval(id);
  console.log(" è stato interrotto.");
}, 5000);

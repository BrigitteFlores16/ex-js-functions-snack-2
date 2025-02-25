//Snack 4
//Crea un generatore di funzioni creaTimer
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
  return () => setTimeout(() => console.log("tempo scaduto!"), tempo);
}
let functiontimer = creaTimer(5000);
functiontimer();

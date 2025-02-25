//Snack 8 (Bonus)
//Crea una funzione che simula un conto alla rovescia
//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
function contoAllaRovescia(n) {
  const timer = setInterval(() => {
    if (n >= 0) {
      console.log(n);
      n--;
    } else {
      console.log("Tempo scaduto!");
      clearInterval(timer);
    }
  }, 1000);
}
contoAllaRovescia(5);

const operazioni = [
  () => console.log("Prima operazione"),
  () => console.log("Seconda operazione"),
  () => console.log("Terza operazione"),
];
sequenzaOperazioni(operazioni, 2000);

//Snack 9 (Bonus)
//Creare una funzione che esegue una sequenza di operazioni con ritardi
//Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function sequenzaOperazioni(operazioni, intervallo) {
  operazioni.forEach((operazione, index) => {
    setTimeout(() => {
      operazione();
    }, intervallo * index);
  });
}

//Snack 10 (Bonus)
//Creare un throttler per limitare l’esecuzione di una funzione
//Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(funzione, limite) {
  let lastRun = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastRun >= limite) {
      funzione.apply(this, args);
      lastRun = now;
    }
  };
}

const loggerThrottled = creaThrottler(
  () => console.log("Throttled function called"),
  2000
);

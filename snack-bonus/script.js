//Snack 8 (Bonus)
//Crea una funzione che simula un conto alla rovescia
//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0,
// con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

/*function contoAllaRovescia(n) {
  let contatore = n;
  const timer = setInterval(() => {
    if (contatore > 0) {
      console.log(contatore);
      contatore--;
    } else {
      console.log("Tempo scaduto!");
      clearInterval(timer);
    }
  }, 1000);
}
contoAllaRovescia(4);*/

//Snack 9 (Bonus)
//Creare una funzione che esegue una sequenza di operazioni con ritardi
//Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

/*function sequenzaOperazioni(operazioni, intervallo) {
  operazioni.forEach((operazione, index) => {
    setTimeout(() => {
      operazione();
    }, intervallo * index);
  });
}

sequenzaOperazioni(
  [
    () => console.log("Prima operazione"),
    () => console.log("Seconda operazione"),
    () => console.log("Terza operazione"),
  ],
  2000
);*/

//Snack 10 (Bonus)
//Creare un throttler per limitare l’esecuzione di una funzione
//Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

/*function creaThrottler(last, limite) {
  let lastRun = 0;

  return function (...args) {
    const ora = Date.now();

    if (ora - lastRun >= limite) {
      lastRun = ora;
      last(...args);
    } else {
      console.log("funzione non eseguita!");
    }
  };
}
const throttler = creaThrottler(() => console.log("funzione eseguita!"), 2000);
throttler();
throttler();
setTimeout(throttler, 3000);*/

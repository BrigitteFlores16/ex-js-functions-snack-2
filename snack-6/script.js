//Snack 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval,
// incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
  let contatore = 0;

  return function () {
    const id = setInterval(function () {
      contatore++;
      console.log(`Contatore: ${contatore}`);
    }, intervallo);
    return id;
  };
}

const avviaContatore = creaContatoreAutomatico(1000);
const idInterval = avviaContatore();
setTimeout(() => clearInterval(idInterval), 3000);

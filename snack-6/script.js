//Snack 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval,
// incrementando un contatore e stampandolo.

function creaContatoreAutomatico(nome, intervallo) {
  let contatore = 0;

  return function () {
    const id = setInterval(function () {
      contatore++;
      console.log(`${nome}:${contatore}`);
    }, intervallo);
  };
}

const contaognisecondo1 = creaContatoreAutomatico("uno", 1000);
const contaognisecondo2 = creaContatoreAutomatico("due", 3000);

contaognisecondo1();
contaognisecondo2();

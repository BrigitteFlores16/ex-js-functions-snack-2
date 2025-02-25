//Snack 3
//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(param1, param2, param3) {
  const funzioneparam = param3(param1, param2);
  console.log(funzioneparam);
}
const funzionesomma = (num1, num2) => num1 + num2;
eseguiOperazione(1, 4, funzionesomma);

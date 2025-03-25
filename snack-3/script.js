//Snack 3
//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

const eseguiOperazione = (num1, mun2, operatore) => {
  operatore(num1, num2);
};
eseguiOperazione(2, 3, somma);

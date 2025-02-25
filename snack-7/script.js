//Snack 7
//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function timerstop(tempo, tempAvvio, tempStop) {
  setTimeout(function () {
    let intervalId = setInterval(function () {
      console.log(tempo);
    }, 1000);

    setTimeout(function () {
      clearInterval(intervalId);
      console.log("è stato fermato.");
    }, tempStop);
  }, tempAvvio);
}

timerstop("stampata ogni secondo!", 2000, 1000);

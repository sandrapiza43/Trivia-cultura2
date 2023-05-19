 function respuestas() {
    let correctas = ["2", "2", "1"];
    var trivia = document.forms["trivia cultura"];
    var total = 3;
    var puntos = 0;
    var noRespondidas = [];

    for (var i = 1; i <= total; i++) {
      if (trivia["p" + i].value === "") {
        noRespondidas.push(i);
      } else {
        if (trivia["p" + i].value === correctas[i - 1]) {
          puntos++;
        }
      }
    }
    if (noRespondidas.length > 0) {
      alert("Jugador Falta responder la(s) pregunta(s): " + noRespondidas.join(", "));
    } else {
      alert("Felicitaciones tu Cantidad de preguntas acertadas: " + puntos + " de " + total);
    }
  }

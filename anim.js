// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Llorar no te devolverá nada", time: 115 },
  { text: "No importa cuántas veces te lo diga, nunca entenderás mi corazón", time: 122 },
  { text: "Las dos personas del futuro que dibujé", time: 122 },
  { text: "Siguen estorbando, hasta el punto del dolor.", time: 655 },
  { text: "Las respuestas que quiero olvidar, no importa cuánto lo intente", time: 116 },
  { text: "Te has ido, y ha pasado mucho tiempo", time: 113 },
  { text: "No pude hacer nada, ni siquiera decir gracias", time: 112 },
  { text: "Ni siquiera pude decir gracias, y las lágrimas que no pude contener cayeron.", time: 14 },
  { text: "El anillo que me puse, sólo un poco más...", time: 19 },
  { text: "Por favor quédate así.", time: 27 },
  { text: "Aunque llores, nada volverá a ti.", time: 12 },
  { text: "No importa cuántas veces te lo diga, nunca entenderás mi corazón.", time: 12 },
  { text: "Las dos personas del futuro que dibujé.", time: 10 },
  { text: "Contando recuerdos, atesorandolos.", time: 11 },
  { text: "Estás un poco por delante de mí, eres un poco más rápido en tus pies.", time: 17 },
  { text: "¿Nunca volverás a mirar atrás?", time: 14 },
  { text: "Sólo un poco más... Quiero pensar en ti.", time: 18 },
  { text: "No importa lo doloroso que sea.", time: 14 },
  { text: "Quiero estar a tu lado. Tu cara sonriente es todo lo que veo.", time: 18 },
  { text: "Como una concha en mi memoria.", time: 13 },
  { text: "Siempre estoy sonriendo.", time: 18 },
  { text: "No he podido seguir adelante desde ese día.", time: 14 },
  { text: "Que nos conocimos.", time: 19 },
  { text: "No me arrepiento de nada.", time: 16 },
  { text: "Me diste tanta felicidad.", time: 13 },
  { text: "Para ti, un terco adiós.", time: 18 },
 { text: "Aunque llores, nada volverá a ti.", time:  12 },
  { text: "No importa cuántas veces te lo diga, nunca entenderás mi corazón.", time: 18 },
  { text: "Las dos personas del futuro que dibujé.", time: 13 },
  { text: "Contando recuerdos, atesorandolos.", time: 11 },
  { text: "Estás un poco por delante de mí, eres un poco más rápido en tus pies.", time: 17 },
  { text: "¿Nunca volverás a mirar atrás?", time: 114 },
  { text: "Sólo un poco más... Quiero pensar en ti.", time: 18 },
  { text: "No importa lo doloroso que sea.", time: 14 },
  { text: "Quiero estar a tu lado. Tu cara sonriente es todo lo que veo.", time: 18 },
  { text: "Como una concha en mi memoria.", time: 13 },
  { text: "Siempre estoy sonriendo.", time: 15 },
  { text: "No he podido seguir adelante desde ese día.", time:3 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 10
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.6; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
import { debounce } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Función que se ejecuta cuando ocurre el evento 'timeupdate'
const handleTimeUpdate = debounce(function(timeupdate) {
  localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
}, 1000);

player.on('timeupdate', handleTimeUpdate);

// Obtener el valor almacenado en localStorage
let videoWaiting = localStorage.getItem("videoplayer-current-time");

// Convertir el valor a número
videoWaiting = parseFloat(videoWaiting);

// Establecer el tiempo actual del reproductor
player.setCurrentTime(videoWaiting).then(function(seconds) {
  // seconds = el tiempo actual al que se movió el reproductor
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      // el tiempo fue menor que 0 o mayor que la duración del video
      break;

    default:
      // se produjo otro error
      break;
  }
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});

const onPlay = function(data) {
  // data es un objeto que contiene propiedades específicas de ese evento
};

player.on('play', onPlay);

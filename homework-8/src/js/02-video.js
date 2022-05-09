//import
import Player from '@vimeo/player';

//variables
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = localStorage.getItem('videoplayer-current-time');

//function for setting current time video
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

//add event listener to player
player.on('timeupdate', throttle(onPlay, 1000));

// function setting current time to localstorage
const onPlay = function (data) {
  console.log('timeupdate:', data);
  try {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
  } catch (error) {
    console.log(error.message);
  }
};

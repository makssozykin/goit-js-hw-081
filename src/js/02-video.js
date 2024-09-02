import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const currentTimeLsKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(currentTimeLsKey, data.seconds);
}

const currentTime = localStorage.getItem(currentTimeLsKey) || 0;

player
  .setCurrentTime(currentTime)
  .then(() => {
    console.log('Video time updated to', currentTime);
  })
  .catch(console.error);

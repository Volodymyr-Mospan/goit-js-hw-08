import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const { seconds = 0 } = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) ?? 0);

player.on('timeupdate', throttle(setSecondsInLocalStorage, 1000));

player.setCurrentTime(seconds);

function setSecondsInLocalStorage(timeupdate) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timeupdate));
}

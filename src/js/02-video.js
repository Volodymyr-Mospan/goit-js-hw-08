import Player from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (timeupdate) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timeupdate));
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player("vimeo-player", {
    width: 640
});

const storageKey = 'videoplayer-current-time';

const saveToLocalStorage = _.throttle((el) => {
    localStorage.setItem(storageKey, el.seconds);
}, 1000);
player.on('timeupdate', saveToLocalStorage);

const seconds = localStorage.getItem(storageKey);
if (seconds) {
    player.setCurrentTime(seconds)
}

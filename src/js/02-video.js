import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player("vimeo-player", {
    width: 640
});

storageKey = 'videoplayer-current-time';

const saveToLocalStorage = _.throttle((el) => {
    localStorage.setItem(storageKey, JSON.stringify(el));
}, 1000);
player.on('timeupdate', saveToLocalStorage);

const state = JSON.parse(localStorage.getItem(storageKey));
if (state) {
    player.setCurrentTime(state.seconds)
}

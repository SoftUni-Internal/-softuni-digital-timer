import { animationFrame } from './animations.js';
import { elements } from './elements.js';

let isStarted = false;

export function controlCenter() {
    if (!isStarted) {
        animationFrame.startUpdateSeconds();
    } else {
        animationFrame.stopUpdateSeconds();
    }

    isStarted = !isStarted;
};

export function isStartedYet() {
    return isStarted;
};

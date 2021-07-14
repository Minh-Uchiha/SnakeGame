import { update as updateSnake, SNAKE_SPEED, snakeIntersection, snakeOutOfGrid, resetSnake } from './snake.js'
import { update as updateFood } from './food.js'
import { updateScoreDisplay, updateScoreUi, resetScore } from './ui.js'
import { resetInputDirection } from './input.js';

let lastTimeStamp;
const gameBoard = document.querySelector('.container');
const startButton = document.querySelector('.start');
const ui = document.querySelector('.ui')

function main( currentTimeStamp ) {
    if ( snakeIntersection() || snakeOutOfGrid() ) {
        updateScoreUi();
        ui.classList.remove('hidden');
        return;
    }
    requestAnimationFrame(main);
    updateScoreDisplay();
    const intervalBetweenTwoTimeStamps = (currentTimeStamp - lastTimeStamp)/1000;
    if ( intervalBetweenTwoTimeStamps < 1 / SNAKE_SPEED ) return;
    lastTimeStamp = currentTimeStamp;

    updateSnake(gameBoard);
    updateFood(gameBoard);

}

startButton.addEventListener( 'click', () => {
    resetEverything();
    ui.classList.add('hidden')
})

function resetEverything() {
    requestAnimationFrame(main)
    resetSnake();
    resetScore();
    resetInputDirection();
}


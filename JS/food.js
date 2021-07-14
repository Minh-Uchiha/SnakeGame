import { onSnake, EXPANSION_RATE, expandSnake } from "./snake.js";
import { increaseScore } from "./ui.js";

let food = randomFoodPosition();

export function update( gameBoard ) {
    draw( gameBoard );
    if ( onSnake(food) ) {
        expandSnake(EXPANSION_RATE);
        increaseScore();
        food = randomFoodPosition();
    }
}

function draw( gameBoard ) {
    const Food = document.createElement('div')
    Food.style.gridRowStart = food.y;
    Food.style.gridColumnStart = food.x;
    Food.classList.add('food');
    gameBoard.appendChild(Food);
}

function randomFoodPosition() {
    let newFoodPos
    while ( newFoodPos == null || onSnake( newFoodPos) ) {
        newFoodPos = {x: Math.floor(Math.random()*27) + 1, y: Math.floor(Math.random()*27) + 1 };
    }
    return newFoodPos;
}
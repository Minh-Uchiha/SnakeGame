import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 10;
export const EXPANSION_RATE = 1;

let snakeBody = [{x: 14, y: 14}];
let amount = 0;

export function update( gameBoard ) {
    addSegment();
    const X = snakeBody[snakeBody.length - 1].x + getInputDirection().x;
    const Y = snakeBody[snakeBody.length - 1].y + getInputDirection().y;
    snakeBody.push({x: X, y: Y})
    snakeBody.shift();
    draw( gameBoard );
}

function draw( gameBoard ) {
    gameBoard.innerHTML = '';
    snakeBody.forEach( segment => {
        const snakeSquare = document.createElement('div');
        snakeSquare.classList.add('snake')
        snakeSquare.style.gridRowStart = segment.y;
        snakeSquare.style.gridColumnStart = segment.x;
        gameBoard.appendChild(snakeSquare)
    })
}

export function onSnake( foodPosition ) {
    if ( snakeBody[snakeBody.length - 1].x === foodPosition.x && snakeBody[snakeBody.length - 1].y === foodPosition.y ) return true;
    return false;
}

export function expandSnake( EXPANSION_RATE ) {
    amount += EXPANSION_RATE;
}

function addSegment() {
    for ( let i = 0; i < amount; i ++ ) {
        snakeBody.unshift({...snakeBody[0]});
    }
    amount = 0;
}

export function snakeIntersection() {
    return snakeBody.some( (pos, index) => {
        if ( index === snakeBody.length - 1 ) return false;
        return pos.x === snakeBody[snakeBody.length - 1].x && pos.y === snakeBody[snakeBody.length - 1].y;
    })
}

export function snakeOutOfGrid() {
    return snakeBody[snakeBody.length - 1].x <= 0 || snakeBody[snakeBody.length - 1].x > 27 || snakeBody[snakeBody.length - 1].y <= 0 || snakeBody[snakeBody.length - 1].y > 27;
}

export function resetSnake() {
    snakeBody = [{x: 14, y: 14}];
}
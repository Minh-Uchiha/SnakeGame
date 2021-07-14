let inputDirection = {x: 0, y: 0};
let lastInputDirection = inputDirection;

addEventListener('keydown', (e) => {
    switch( e.key ) {
        case 'ArrowUp':
            if ( Math.abs(lastInputDirection.y) === 1 ) break;
            inputDirection = {x: 0, y: -1};
            break;
        case 'ArrowDown':
            if ( Math.abs(lastInputDirection.y) === 1 ) break;
            inputDirection = {x: 0, y: 1};
            break;
        case 'ArrowRight':
            if ( Math.abs(lastInputDirection.x) === 1 ) break;
            inputDirection = {x: 1, y: 0};
            break;
        case 'ArrowLeft':
            if ( Math.abs(lastInputDirection.x) === 1 ) break;
            inputDirection = {x: -1, y: 0};
            break;
        default:
            break;
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

export function resetInputDirection() {
    inputDirection = {x: 0, y: 0};
}
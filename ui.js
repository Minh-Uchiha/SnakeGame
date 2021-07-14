let score = 0;
const INCREASE_AMOUNT = 10
const score_top_left = document.querySelector('.score span')
const score_ui = document.querySelector('.score_ui')

export function increaseScore() {
    score += INCREASE_AMOUNT;
}

export function updateScoreDisplay() {
    score_top_left.innerHTML = score;
}

export function updateScoreUi() {
    score_ui.innerHTML = score;
}

export function resetScore() {
    score = 0;
}
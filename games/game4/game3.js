// script.js

let currentPlayer = 'X';
let gameActive = true;
const gameState = Array(9).fill(null);

function createGrid() {
    const grid = document.getElementById('tic-tac-toe-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('click', () => handleCellClick(i));
        grid.appendChild(cell);
    }
}

function handleCellClick(index) {
    if (!gameActive || gameState[index]) {
        return;
    }
    gameState[index] = currentPlayer;
    document.getElementById('tic-tac-toe-grid').children[index].innerText = currentPlayer;
    if (checkWinner()) {
        gameActive = false;
        setTimeout(() => alert(`Player ${currentPlayer} wins!`), 100);
    } else if (gameState.every(cell => cell)) {
        gameActive = false;
        setTimeout(() => alert('It\'s a draw!'), 100);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
    });
}

function resetGame() {
    gameActive = true;
    currentPlayer = 'X';
    for (let i = 0; i < gameState.length; i++) {
        gameState[i] = null;
    }
    createGrid();
}

document.addEventListener('DOMContentLoaded', createGrid);

const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
let score = 0;
let board = Array(4).fill().map(() => Array(4).fill(0));

function createBoard() {
    gameBoard.innerHTML = '';
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.dataset.value = board[row][col];
            gameBoard.appendChild(tile);
        }
    }
    updateBoard();
}

function updateBoard() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile, index) => {
        const value = board[Math.floor(index / 4)][index % 4];
        tile.dataset.value = value;
        tile.textContent = value > 0 ? value : '';
    });
    scoreDisplay.textContent = `Score: ${score}`;
}

function addNewTile() {
    const emptyTiles = [];
    board.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile === 0) {
                emptyTiles.push([rowIndex, colIndex]);
            }
        });
    });
    if (emptyTiles.length === 0) return;
    const [row, col] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
    updateBoard();
}

function slide(row) {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);
    return arr;
}

function combine(row) {
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] === row[i + 1] && row[i] !== 0) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }
    return row;
}

function slideAndCombine(row) {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}

function moveLeft() {
    let oldBoard = JSON.parse(JSON.stringify(board));
    for (let row = 0; row < 4; row++) {
        board[row] = slideAndCombine(board[row]);
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
        addNewTile();
    }
}

function moveRight() {
    let oldBoard = JSON.parse(JSON.stringify(board));
    for (let row = 0; row < 4; row++) {
        board[row] = slideAndCombine(board[row].reverse()).reverse();
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
        addNewTile();
    }
}

function moveUp() {
    let oldBoard = JSON.parse(JSON.stringify(board));
    for (let col = 0; col < 4; col++) {
        let column = [board[0][col], board[1][col], board[2][col], board[3][col]];
        column = slideAndCombine(column);
        for (let row = 0; row < 4; row++) {
            board[row][col] = column[row];
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
        addNewTile();
    }
}

function moveDown() {
    let oldBoard = JSON.parse(JSON.stringify(board));
    for (let col = 0; col < 4; col++) {
        let column = [board[0][col], board[1][col], board[2][col], board[3][col]];
        column = slideAndCombine(column.reverse()).reverse();
        for (let row = 0; row < 4; row++) {
            board[row][col] = column[row];
        }
    }
    if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
        addNewTile();
    }
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
    }
});

createBoard();
addNewTile();
addNewTile();

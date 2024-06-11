const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

let board = [];
let score = 0;

const shapes = [
    [[1, 1, 1, 1]], // I
    [[1, 1], [1, 1]], // O
    [[1, 1, 1], [0, 1, 0]], // T
    [[1, 1, 0], [0, 1, 1]], // Z
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 1, 1], [1, 0, 0]], // L
    [[1, 1, 1], [0, 0, 1]] // J
];

const colors = [
    'cyan', 'yellow', 'purple', 'red', 'green', 'orange', 'blue'
];

let currentPiece = getRandomPiece();
let nextPiece = getRandomPiece();

function getRandomPiece() {
    const shapeIndex = Math.floor(Math.random() * shapes.length);
    return {
        shape: shapes[shapeIndex],
        color: colors[shapeIndex],
        row: 0,
        col: Math.floor(COLS / 2) - 1
    };
}

function drawBlock(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (board[row][col]) {
                drawBlock(col, row, board[row][col]);
            }
        }
    }
}

function drawPiece(piece) {
    for (let row = 0; row < piece.shape.length; row++) {
        for (let col = 0; col < piece.shape[row].length; col++) {
            if (piece.shape[row][col]) {
                drawBlock(piece.col + col, piece.row + row, piece.color);
            }
        }
    }
}

function movePiece(piece, direction) {
    piece.col += direction;
    if (isCollision(piece)) {
        piece.col -= direction;
    }
}

function rotatePiece(piece) {
    const newShape = [];
    for (let row = 0; row < piece.shape[0].length; row++) {
        newShape[row] = [];
        for (let col = 0; col < piece.shape.length; col++) {
            newShape[row][col] = piece.shape[piece.shape.length - 1 - col][row];
        }
    }
    piece.shape = newShape;
    if (isCollision(piece)) {
        piece.shape = shapes[shapes.indexOf(piece.shape)];
    }
}

function dropPiece() {
    currentPiece.row++;
    if (isCollision(currentPiece)) {
        currentPiece.row--;
        placePiece(currentPiece);
        currentPiece = nextPiece;
        nextPiece = getRandomPiece();
        if (isCollision(currentPiece)) {
            resetGame();
        }
    }
}

function placePiece(piece) {
    for (let row = 0; row < piece.shape.length; row++) {
        for (let col = 0; col < piece.shape[row].length; col++) {
            if (piece.shape[row][col]) {
                board[piece.row + row][piece.col + col] = piece.color;
            }
        }
    }
    clearLines();
}

function clearLines() {
    for (let row = ROWS - 1; row >= 0; row--) {
        let isFull = true;
        for (let col = 0; col < COLS; col++) {
            if (!board[row][col]) {
                isFull = false;
                break;
            }
        }
        if (isFull) {
            for (let r = row; r > 0; r--) {
                for (let c = 0; c < COLS; c++) {
                    board[r][c] = board[r - 1][c];
                }
            }
            for (let c = 0; c < COLS; c++) {
                board[0][c] = null;
            }
            score += 10;
            document.getElementById('score').textContent = `Score: ${score}`;
            row++;
        }
    }
}

function isCollision(piece) {
    for (let row = 0; row < piece.shape.length; row++) {
        for (let col = 0; col < piece.shape[row].length; col++) {
            if (piece.shape[row][col] && 
                (piece.row + row >= ROWS || 
                 piece.col + col < 0 || 
                 piece.col + col >= COLS || 
                 board[piece.row + row][piece.col + col])) {
                return true;
            }
        }
    }
    return false;
}

function resetGame() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    currentPiece = getRandomPiece();
    nextPiece = getRandomPiece();
}

function update() {
    dropPiece();
    drawBoard();
    drawPiece(currentPiece);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            movePiece(currentPiece, -1);
            break;
        case 'ArrowRight':
            movePiece(currentPiece, 1);
            break;
        case 'ArrowUp':
            rotatePiece(currentPiece);
            break;
        case 'ArrowDown':
            dropPiece();
            break;
    }
    drawBoard();
    drawPiece(currentPiece);
});

resetGame();
setInterval(update, 500);

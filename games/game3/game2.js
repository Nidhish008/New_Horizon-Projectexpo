// script.js

const initialGrid = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9]
];

function createGrid() {
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = '';
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            if (initialGrid[row][col]) {
                cell.value = initialGrid[row][col];
                cell.disabled = true;
                cell.classList.add('fixed');
            }
            grid.appendChild(cell);
        }
    }
}

function checkSolution() {
    const cells = document.querySelectorAll('#sudoku-grid input');
    let grid = [];
    for (let i = 0; i < 9; i++) {
        grid.push([]);
        for (let j = 0; j < 9; j++) {
            const value = cells[i * 9 + j].value;
            grid[i].push(value ? parseInt(value, 10) : null);
        }
    }

    if (isValidSudoku(grid)) {
        alert('Correct solution!');
    } else {
        alert('There are errors in your solution.');
    }
}

function resetGrid() {
    createGrid();
}

function isValidSudoku(grid) {
    for (let i = 0; i < 9; i++) {
        if (!isValidRow(grid, i) || !isValidCol(grid, i) || !isValidBox(grid, i)) {
            return false;
        }
    }
    return true;
}

function isValidRow(grid, row) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
        if (grid[row][col] != null) {
            if (seen.has(grid[row][col])) {
                return false;
            }
            seen.add(grid[row][col]);
        }
    }
    return true;
}

function isValidCol(grid, col) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
        if (grid[row][col] != null) {
            if (seen.has(grid[row][col])) {
                return false;
            }
            seen.add(grid[row][col]);
        }
    }
    return true;
}

function isValidBox(grid, box) {
    const seen = new Set();
    const startRow = Math.floor(box / 3) * 3;
    const startCol = (box % 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = grid[startRow + i][startCol + j];
            if (value != null) {
                if (seen.has(value)) {
                    return false;
                }
                seen.add(value);
            }
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', createGrid);

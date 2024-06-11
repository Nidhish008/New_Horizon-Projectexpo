// snake.js

let canvas, ctx;
let snake, food, direction, score;
let gameInterval;
const box = 20; // Size of the grid boxes

function startGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    snake = [{ x: 8 * box, y: 8 * box }];
    food = generateFood();
    direction = 'RIGHT';
    score = 0;
    document.getElementById('score').textContent = 'Score: ' + score;
    document.addEventListener('keydown', changeDirection);
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(draw, 100);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'darkgreen' : 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    // Move the snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    // Check for collision with food
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;
        food = generateFood();
    } else {
        snake.pop();
    }

    // Add new head to the snake
    let newHead = { x: snakeX, y: snakeY };

    // Check for collisions
    if (collision(newHead, snake) || snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height) {
        clearInterval(gameInterval);
        endGame(); // Call endGame function to handle game over
    }

    snake.unshift(newHead);
}

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
}

function collision(newHead, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function endGame() {
    alert('Game Over! Your score: ' + score);
    // Export the score here if needed
    exportScore(score);
}

function exportScore(score) {
    // Perform any logic to export or use the score value
    console.log('Score exported:', score);
}

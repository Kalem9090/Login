const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let box =  20; // Size of each box
let snake = []; // Array to store the snake
snake[0] = {x: box*10, y: box*10}; // Initial snake position
let food = null; // Food object

function createFood() {
    food = {
        x: Math.floor(Math.random() *  19 +  1) * box,
        y: Math.floor(Math.random() *  19 +  1) * box
    };
}

function drawSnakePart(part) {
    context.fillStyle = "green";
    context.fillRect(part.x, part.y, box, box);
}

function draw() {
    context.clearRect(0,  0, canvas.width, canvas.height); // Clear the canvas
    context.fillStyle = "lightgray";
    context.fillRect(0,  0, canvas.width, canvas.height); // Draw the background

    snake.forEach(drawSnakePart); // Draw each part of the snake

    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box); // Draw the food
}

function update() {
    const head = Object.assign({}, snake[0]); // New head
    if (direction === "right") head.x += box;
    else if (direction === "left") head.x -= box;
    else if (direction === "up") head.y -= box;
    else if (direction === "down") head.y += box;

    snake.unshift(head); // Add new head to the snake

    if (food.x === head.x && food.y === head.y) {
        createFood(); // Create new food
    } else {
        snake.pop(); // Remove tail
    }
}

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop,  100); // Call the game loop again after  100ms
}

window.addEventListener('keydown', updateDirection);

function updateDirection(event) {
    if (event.keyCode ===  37 && direction !== "right") direction = "left";
    else if (event.keyCode ===  38 && direction !== "down") direction = "up";
    else if (event.keyCode ===  39 && direction !== "left") direction = "right";
    else if (event.keyCode ===  40 && direction !== "up") direction = "down";
}

createFood();
gameLoop();

// Assuming `snake` is an array representing the snake's body segments
// and `direction` is a variable storing the current direction of the snake

let direction = 'right'; // Default direction

function changeDirection(event) {
  const LEFT_ARROW =  37;
  const UP_ARROW =  38;
  const RIGHT_ARROW =  39;
  const DOWN_ARROW =  40;

  const keyPressed = event.keyCode;

  // Prevent reversing direction
  if (keyPressed === LEFT_ARROW && direction !== 'right') {
    direction = 'left';
  } else if (keyPressed === UP_ARROW && direction !== 'down') {
    direction = 'up';
  } else if (keyPressed === RIGHT_ARROW && direction !== 'left') {
    direction = 'right';
  } else if (keyPressed === DOWN_ARROW && direction !== 'up') {
    direction = 'down';
  }
}

// Attach the event listener to the window object
window.addEventListener('keydown', changeDirection);


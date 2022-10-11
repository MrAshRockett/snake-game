import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
// TODO
// -----------------------------------------------------
// Create Game loop
// continuous snake movement function
// arrow functions for direction
// draw/represent snake
// draw/represent food
// food randomly placed on grid
// actions when snake interacts with food
// snake length increases by one if food is consumed
// if snake hits outer walls, prompt game over with error check
// if snake hits self, prompt game over with error check


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('Oh no! You lost. Press OK to restart.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  // Convert current time from milliseconds to seconds
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  
  lastRenderTime = currentTime

  // games require two major logic components for updating the game loop. Update and Draw. Update will update the snake, or decide if we lose, Draw will take that logic and draw it on the page.
  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
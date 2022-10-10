import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5

const snakeBody = [{ x: 11, y: 11 }]


export function update() {
  const inputDirection = getInputDirection()
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    // select the element before the one we select. This will be the last element. Everything moves into the parent position of the last element.
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}
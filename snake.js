import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {

  const inputDirection = getInputDirection()
  console.log(inputDirection);
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    // select the element before the one we select. This will be the last element. Everything moves into the parent position of the last element.
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  // axis have been inverted due to an unresolved error. 
  //  - - - - - - - - - - - - - - - - - - - - - - - - -
  // Issue seems to be rows and columns are inverted on the keydown. ie, Up key moves the snake left, etc.
  //  - - - - - - - - - - - - - - - - - - - - - - - - -
  snakeBody[0].x += inputDirection.y
  snakeBody[0].y += inputDirection.x
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

export function expandSnake(amount) {
  newSegments += amount
} 

export function onSnake(position) {
  return snakeBody.some(segment => {
    return equalPositions(segment, position)
  })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

export function addSegments() {
  // for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length + 1]})
  // }

  // newSegments = 0
}

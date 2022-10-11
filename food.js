import { onSnake, expandSnake, addSegments } from './snake.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    console.log("True");
    addSegments()

    expandSnake(EXPANSION_RATE)
    food = { x: 20, y: 10 }
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.x
  foodElement.style.gridColumnStart = food.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
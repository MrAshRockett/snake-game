let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 } 

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w': case 'ArrowUp':
      // the if statements prevent the snake from being able to move back in the direction it was previously going.
      if (lastInputDirection.y !== 0) break
      console.log(inputDirection)
      inputDirection = { x: 0, y: -1 }
      break
    case 's': case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      console.log(inputDirection)
      inputDirection = { x: 0, y: 1 }
      break
    case 'a': case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      console.log(inputDirection)
      inputDirection = { x: -1, y: 0 }
      break
    case 'd': case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      console.log(inputDirection)
      inputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
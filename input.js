let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 } 

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      // the if statements prevent the snake from being able to move back in the direction it was previously going.
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break

  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
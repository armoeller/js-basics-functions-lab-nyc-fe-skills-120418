// Code your solution in this file!
// const someBlock = 264
// const startValue = 42

// function distanceFromHqInBlocks(someValue) {
// if ( startValue > someValue ){
//   return startValue - someValue
// } else { return someValue - startValue
// }
// }

// const distanceInBlocks = someBlock * someValue 

const startingPoint = 42
const feetInBlock = 264

function distanceFromHqInBlocks(block) {
 if(block < startingPoint){
   return startingPoint - block
  } else { 
    return block - startingPoint
 } 
}

function distanceFromHqInFeet(block) {
  if (block < startingPoint){
    return (startingPoint - block)  * feetInBlock
  } else {
    return (block - startingPoint) * feetInBlock
  }
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
   if (endingBlock < startingBlock) {
    return (startingBlock - endingBlock) * feetInBlock
  } else {
    return (endingBlock - startingBlock) * feetInBlock
  }
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const feetTraveled = calculatesFarePrice(startingBlock, endingBlock) 
  if (feetTraveled <= 400) {
    return 0 
  } else if (400 < feetTraveled < 2000) {
    
  }
}
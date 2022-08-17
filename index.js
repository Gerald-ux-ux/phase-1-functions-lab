// Code your solution in this file!
function distanceFromHqInBlocks(dInblocks) {
    if (dInblocks > 42) {
      return dInblocks - 42;
    
    } else {
      return 42 - dInblocks;
    }
  }
  function distanceFromHqInFeet(dInblocks){
    if (dInblocks > 42) {
      let dInfeet = dInblocks - 42;
      return dInfeet * 264
    
    } else if (dInblocks < 42) {
      let dBelow42 = 42 - dInblocks;
      return dBelow42 * 264;
    }
  }

function distanceTravelledInFeet(startingBlock, endingBlock){
    let distanceTravelled = endingBlock > startingBlock ? (endingBlock - startingBlock)*264 : (startingBlock - endingBlock)*264;
    return distanceTravelled;
}

function calculatesFarePrice(startingBlock, endingBlock){
    let distanceInFeet = distanceTravelledInFeet(startingBlock, endingBlock);
    if(distanceInFeet < 400){
        return 0
    } else if(distanceInFeet > 400 && distanceInFeet < 2000){
        return(distanceInFeet - 400)*0.02
    } else if(distanceInFeet > 2000){
        if(distanceInFeet > 2500){
            return "cannot travel that far"
        }
        return 25;
    }
}
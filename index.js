// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    let block = 42;
    
    if ( distance > 42 ) {
        return distance - block
    } else {
        return block - distance
    }
}

function distanceFromHqInFeet(distance) {
    let block = 42;
    
    if ( distance > 42 ) {
        return (distance - block) * 264
    } else {
        return (block - distance) * 264
    }
}

function distanceTravelledInFeet(start, stop) {
    return stop > start ? (stop - start) * 264 : (start - stop) * 264    
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs(destination - start) * 264

    if ( feet <= 400 ) {
        return 0;
    } else if ( feet > 400 && feet <= 2000 ) {
        return (feet - 400 ) * 0.02;
    } else if ( feet > 2000 && feet <= 2500 ) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}
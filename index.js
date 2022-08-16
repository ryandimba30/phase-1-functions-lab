// Code your solution in this file!
const headquaters= 42;
function distanceFromHqInBlocks(blocks){
    if  (blocks >42) {
        return blocks - headquaters;
    }
    else if (blocks<42) {
        return headquaters - blocks * 1;
    }


}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(blocks1,blocks2) {
    const feetDifference = (distanceFromHqInFeet(blocks1) - distanceFromHqInFeet(blocks2))
    if (feetDifference >= 0) {
        return feetDifference;
    } else {
        return (feetDifference * -1);
    }
}

function calculatesFarePrice(start,destination) {
    const feetTravelled= (distanceTravelledInFeet(start,destination)) 
    if (feetTravelled <=400) {
        return 0;
    }else if (feetTravelled >=400 && feetTravelled <= 2000) {
        return ((feetTravelled - 400) * 0.02);
    }else if (feetTravelled >= 2000 && feetTravelled <=2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

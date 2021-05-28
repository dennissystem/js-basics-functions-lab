// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const blocks = Math.abs(pickup - 42);
    return blocks ;
}
    distanceFromHqInBlocks(50)

function distanceFromHqInFeet(beginning){
    const distance = Math.abs((beginning-42)*264)
    return distance
}
function distanceTravelledInFeet(start, finish){
    const feet = Math.abs((start-finish)*264)
    return feet 
}
function calculatesFarePrice(start, destination, price){
    const feet = Math.abs((start-destination)*264)
    if (feet < 400){
        price = 0
    }
    else if (feet >=400 && feet <= 2000){
        price = (feet-400)*0.02
    }
    else if (feet>2000 && feet <=2500){
        price = 25
    }
    else if (feet>2500){
        price = 'cannot travel that far'
    }
return price
}
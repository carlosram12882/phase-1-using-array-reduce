const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


//const totalBatteries = function(){




const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
//console.log(sum);
    let total = accumulator + currentValue;
console.log(total);
    return total
}, 0)


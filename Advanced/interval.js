function createIntervals(origin) {

    let arr = [...origin];
  
    for(let i = 0; i < arr.length; i++) {

        let current = arr[i];

        for (let x = 0; x < arr.length; x++) {

            let target = arr[x];

            if(
                (
                    current[0] < target[0] && 
                    current[1] >= target[0]
                )
                ||
                (
                    current[0] > target[0] &&
                    current[0] < target[1]
                )
            ){

                let minInterval = current[0];
                let maxInterval = current [1];

                if(target[1] > current[1]) {

                    maxInterval = target[1];
                }

                if(target[0] < current[0]) {

                    minInterval  = target[0];
                }

                let newElem = [minInterval, maxInterval];

                arr.push(newElem);

                arr.splice(i, 1);

                let removedSecondIndex = x > i ? x - 1: x;

                arr.splice(removedSecondIndex,1);

                break;
        
            }
        }
    }

    return arr;
}

module.exports = createIntervals;
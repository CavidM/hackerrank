eachSockQuantity = arr => arr.reduce((obj, value) => {

    if (obj.hasOwnProperty(value)) {

        obj[value] += 1;
    }
    else {
        obj[value] = 1;
    }

    return obj;
}, {});

function getMatchingPairs(arr) {

    let quantity = eachSockQuantity(arr);

    let pairs = 0;

    for (let i in quantity) {
        pairs += Math.floor(quantity[i] / 2);
    }

    return pairs;
}

module.exports = getMatchingPairs;
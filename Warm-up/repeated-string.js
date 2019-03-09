function repeatedString(s, n) {

    let sLenght = s.length;

    let aCountsPerStr = [...s].reduce((sum, value) => {

        if (value == 'a') {
            return ++sum;
        }

        return sum;
    }, 0);

    let repeatedStrCount = parseInt(n / sLenght);

    let restSymbolCount = n % sLenght;

    let aTotalCount = aCountsPerStr * repeatedStrCount;

    let aCountInRestStr = [...s.substr(0, restSymbolCount)].reduce((sum, value) => {

        if (value == 'a') {
            return ++sum;
        }

        return sum;
    }, 0);

    aTotalCount += aCountInRestStr;

    return aTotalCount;
}

module.exports = repeatedString;
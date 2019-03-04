function countingValleys(s) {

    let steps = 0;
    let sea = 0;
    for (let i in s) {

        let prevStep = steps;

        if (s[i] == 'D') {
            steps--;
        }
        else {
            steps++;
        }

        if (steps == 0 && prevStep < 0) {
            sea++;
        }
    }

    return sea;
}

module.exports = countingValleys;
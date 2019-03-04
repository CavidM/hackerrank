function jumpingOnClouds(c) {

    let steps = 0;

    for (let i = 0; i < c.length; i++) {

        let current = c[i],
            next = c[i + 1],
            nNext = c[i + 2];

        if (current === 1) {
            continue;
        }

        if (nNext === 0) {

            steps++;
            i += 1;

            continue;
        }

        if (next === 0) {
            steps++;

            continue;
        }
        
    }

    return steps;

}

module.exports = jumpingOnClouds;
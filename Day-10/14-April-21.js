/***
 *
 * https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript
 */

const bouncingBall = (h, bounce, window) => {
    let rebounds = -1;
    if (bounce > 0 && bounce < 1)
        while (h > window) (rebounds += 2), (h *= bounce);
    return rebounds;
};

console.log(bouncingBall(3.0, 0.66, 1.5), 3);

const countdown = (n) => {
    if (n < 1) {
        return [];
    } else {
        const array = countdown(n - 1);
        array.unshift(n);
        return array;
    }
};

console.log(countdown(10));
console.log(countdown(-1));

const startNum = (stNum, endNum) => {
    return stNum - endNum === 0
        ? [stNum]
        : [...startNum(stNum, endNum - 1), endNum];
};

console.log(startNum(1, 5));
console.log(startNum(4, 4));

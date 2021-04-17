/***
 *
 * https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 *
 */

const uniqueInOrder = (iterable) => {
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

const minMax = (arr) => {};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1]));
console.log(minMax([2334454, 5]));

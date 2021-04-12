/***
 * 06-APRIL-2021
 */

const descendingOrder = (n) =>
    +n
        .toString()
        .split('')
        .sort((a, b) => b - a)
        .join('');

console.log(descendingOrder('42145'));
console.log(descendingOrder('123456789'));

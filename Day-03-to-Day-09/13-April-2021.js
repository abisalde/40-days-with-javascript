/***
 * https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript
 *
 */

const disemvowel = (str) => {
    return str.replace(/[aeiou]/gi, '');
};

console.log(disemvowel('This website is for losers LOL!'));

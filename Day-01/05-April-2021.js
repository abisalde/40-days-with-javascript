/* Today's date is 5-April-2021 */

/**
 *
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 */

const isPangram = (string) => {
    // Convert string to lowercase
    let newStr = string.toLowerCase();
    // Declare alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //Loop through the newStr
    for (let s = 0; s < newStr.length; s++) {
        let alphaloop = alphabet.indexOf(newStr[s]);
        if (alphabet[alphaloop] === newStr[s]) {
            alphabet = alphabet.replace(newStr[s], '');
        }
    }
    return alphabet.length === 0;
};

console.log(isPangram('The quick brown fox jumps over  the lazy dog'));
console.log(isPangram('This is not a pangram.'));

string = 'The quick brown fox jumps over  the lazy dog';

console.log(string.split(''));

function isPangram(string) {
    string = string.toLowerCase();
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

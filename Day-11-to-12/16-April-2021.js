const vowcons = (s) => {
    const vowels = 'aeiou';
    let consonant = '';

    for (let x = 0; x < s.length; x++) {
        console.log(s[x]);
        if (vowels.includes(s[x])) {
            return s[x];
        } else {
            return (consonant += s[x] + '\n');
        }
    }
    return consonant.trim();
};

console.log(vowcons('javascriptloops'));

let str = 'javascriptloops';
const vow = 'aeiou';
let cons = '';

function vowelsAndConsonants(s) {
    let { vowels, consonants } = (s.split('') || []).reduce(
        (target, item) => {
            target[vow.includes(item) ? 'vowels' : 'consonants'].push(item);

            return target;
        },
        { vowels: [], consonants: [] }
    );

    vowels.concat(consonants).forEach((item) => {
        console.log(item);
    });
}

console.log(vowelsAndConsonants('javascriptloops'));

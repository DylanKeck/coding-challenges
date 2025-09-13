/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let maxConsonant = 0;
    let maxVowel = 0;
    let vowels = 'aeiou';

    let freq = {};
    for (let letter of s) {
        freq[letter] = (freq[letter] || 0) + 1;
    }

    for (let [letter, count] of Object.entries(freq)) {
        if (vowels.includes(letter)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxConsonant = Math.max(maxConsonant, count);
        }
    }

    return maxVowel + maxConsonant;
};

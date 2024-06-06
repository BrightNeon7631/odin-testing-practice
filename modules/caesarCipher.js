// shift can't be a negative number
export default function caesarCipher(word, shift) {
    let cipherArray = [];
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            cipherArray.push(shiftChar(word, shift, i, 65, 90));
        } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
            cipherArray.push(shiftChar(word, shift, i, 97, 122));
        } else {
            cipherArray.push(word[i]);
        }
    }
    return cipherArray.join('');
}

function shiftChar(word, shift, index, rangeMin, rangeMax) {
    if (word.charCodeAt(index) + shift > rangeMax) {
        return String.fromCharCode(rangeMin + ((word.charCodeAt(index) + shift) % rangeMax) - 1);
    } else {
        return String.fromCharCode(word.charCodeAt(index) + shift);
    }
}
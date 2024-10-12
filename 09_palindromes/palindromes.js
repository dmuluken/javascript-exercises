const palindromes = function (word) {
    word = word.toLowerCase();
    let len = word.length;
    let newWord = "";
    for (let i = 0; i < len; i++) {
        if (word.charAt(i) == ' ') {
            continue;
        } else if (!(isCharacterALetter(word.charAt(i)))) {
            if (isNaN(word.charAt(i))) {
                continue;
            } else {
                newWord = newWord + word.charAt(i);
            }
        } else {
            newWord = newWord + word.charAt(i);
        }
    }

    len = newWord.length;
    let iter1 = 0;
    let iter2 = len - 1;
    while (true) {
        if (iter1 === iter2 || iter1 > iter2) {
            return true;
        }
        if (newWord.charAt(iter1) === newWord.charAt(iter2)) {
            iter1++;
            iter2--;
            continue;
        } else {
            return false;
        }
    }
};

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

// Do not edit below this line
module.exports = palindromes;

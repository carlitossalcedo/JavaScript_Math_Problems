
var stringToCompare = 'COM ETENCUENTRAS';

console.time("findRecurring test");
function findRecurring(word) {
    let letters = [];
    letters = word.toUpperCase().split('');
    let letter = {};
    let h1 = {}
    
    for (i = 0; i < letters.length; i++) {
        letter = h1[letters[i]];
        if(letter) {
            return letters[i];
        }
        h1[letters[i]] = 1;
    }

    return 'No Duplicate Letter';
}
console.log('findRecurring', findRecurring(stringToCompare));
console.timeEnd("findRecurring test");

console.time("findRecurringRecursive test");
function findRecurringRecursive(word, h1 = {}) {
    let words = word.toUpperCase().split('');
    if (h1[words[0]]) {
        return words[0];
    }
    h1[words[0]] = 1;
    return findRecurringRecursive(words.slice(1).join(''), h1)
}
console.log('findRecurringRecursive', findRecurringRecursive(stringToCompare));
console.timeEnd("findRecurringRecursive test");

// convertimos la palabra en arreglo
// quitamos la letra del arreglo
// y buscamos si existe la letra en la palabra
// caso contrario quitamos la siguiente letra



console.time("findRecurringMemoization test");
function findRecurringMemoization(word, h1 = {}, memo) {

    memo = memo || {};
    if (memo[word]) return memo[word];

    let words = word.toUpperCase().split('');
    if (h1[words[0]]) {
        return words[0];
    }
    h1[words[0]] = 1;
    return memo[word] = findRecurringMemoization(words.slice(1).join(''), h1, memo)
}
console.log('findRecurringMemoization', findRecurringMemoization(stringToCompare));
console.timeEnd("findRecurringMemoization test");
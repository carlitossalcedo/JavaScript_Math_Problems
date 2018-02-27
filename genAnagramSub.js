/* 
genAnagrams
takes  string and returns a array of all anagrams of that string
*/

// time complexity: 0(n * n!) - quadratic
// space complexity: 0(n!) - factorial 

// let anagrams = [];

let genAnagrams = (word, n = null, anagram = '', anagrams = []) => {
    word = word.toUpperCase();

    if (anagram) {
        anagrams.push(anagram);
    }
    
    // base case
    if (!word) {
        return;
    }

    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), n, anagram, anagrams);
        anagram = anagram.slice(0, anagram.length -1);
    }
    let uniq = [...new Set(anagrams)];
    let hash = {};
    for (let i = 0; i < uniq.length; i++) {
        anagram = uniq[i];
        let len = anagram.length;
        if (!(len in hash)) {
            hash[len] = [anagram];
        } else {
            hash[len].push[anagram];
        }
    }
    return n === null ? uniq : hash[n];
    // return uniq[Math.floor(Math.random() *  uniq.length)];
};

// genAnagrams('ABC');
console.log(genAnagrams('AaBC', 3));

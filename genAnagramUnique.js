/* 
genAnagrams
takes  string and returns a array of all anagrams of that string
*/

// time complexity: 0(n * n!) - quadratic
// space complexity: 0(n!) - factorial 

// let anagrams = [];

let genAnagrams = (word, anagram = '', anagrams = []) => {
    // base case
    if (!word) {
        anagrams.push(anagram);
        return;
    }

    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length -1);
    }
    let uniq = [... new Set(anagrams)]
    return uniq[Math.floor(Math.random() *  uniq.length)];
};

// genAnagrams('ABC');
console.log(genAnagrams('ABC'));

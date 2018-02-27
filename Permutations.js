
// nPr = n! / (n-r)!

function factorialRecursive(n) {
    if (n === 0) 
        return 1;

    return factorialRecursive(n -1) * n;
}

console.log('factorialRecursive', factorialRecursive(4));


function permutation(n, r) {
    return factorialRecursive(n) / factorialRecursive(n-r);
}

console.log('permutation', permutation(4, 2));

// nPr = n! / (n-r)!r!

function factorialRecursive(n) {
    if (n === 0) 
        return 1;

    return factorialRecursive(n -1) * n;
}

console.log('factorialRecursive', factorialRecursive(4));


function combination(n, r) {
    return factorialRecursive(n) / (factorialRecursive(n-r)*factorialRecursive(r)) ;
}

console.log('combination', combination(4, 2));
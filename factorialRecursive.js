
function factorialRecursive(n) {

    if (n === 0) {
        return 1;
    }

    return factorialRecursive(n -1) * n;
}

console.log(factorialRecursive(4));

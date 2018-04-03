
'use strict';

function fibRecursiveForNumSteps(numSteps, first, second) {
    if (numSteps === 0) {
        return [];
    }

    return [first + second] + fibRecursiveForNumSteps(numSteps - 1, second, first + second);
}

console.log(
    [0, 1] + fibRecursiveForNumSteps(9, 0, 1)
);


// function fibForNumSteps(numSteps) {
//     var sequence = [0, 1];
//     if (numSteps <= 1) {
//         return sequence;
//     }

//     for(i = 0, numSteps)
// }
var numero = 6
//0,1,1,2,3,5,8,13
// f(n) = f(n-1) + f(n-2)

function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log('fibonacci', 
    fibonacci(numero)
);

// Recursive
function fibonacciRecursive(num) {
    if (num <= 1) return 1;
     //console.log(num);
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log('fibonacciRecursive',
    fibonacciRecursive(numero)
);


// Memoization

function fibonacciMemo(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
}

console.log(
    'fibonacciMemo',
    fibonacciMemo(numero)
);


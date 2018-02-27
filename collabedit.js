function Hello() {
    console.log('hola');
}
Hello();

function factorial(n) {
    if (n === 0 )
    return 1;
    return factorial(n -1) * n;
}
console.log(factorial(4));

function fibonacci(n) {
    if(n<=1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));
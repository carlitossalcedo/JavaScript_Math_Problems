
function getNumberOfBoxes(n, last) {
    if(n === 0) {
        return n;
    }
    return getNumberOfBoxes(n-1) + (n*n);
}
console.log(getNumberOfBoxes(5));
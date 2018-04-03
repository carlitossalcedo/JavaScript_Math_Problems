//Imediately Invoked Function Expression

// Error: Expression Expected
// This is a definition
// function foo(){

// }();

// This is an expression 
var foo = function() {
    console.log('IIFE');
}();

// This is an expression function 
// by adding parentesis we convert it into expression 
(function foo(){
    console.log('IIFE');
})();
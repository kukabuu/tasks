function make(f, n) {return f ? f(n): n}
function zero(f) {return make(f, 0)}
function one(f) {return make(f, 1)}
function two(f) {return make(f, 2)}
function three(f) {return make(f, 3)}
function four(f) {return make(f, 4)}
function five(f) {return make(f, 5)}
function six(f) {return make(f, 6)}
function seven(f) {return make(f, 7)}
function eight(f) {return make(f, 8)}
function nine(f) {return make(f, 9)}

function plus(a) {return function(b) {return a + b}}
function minus(a) {return function(b) {return b - a}}
function times(a) {return function(b) {return a * b}}
function dividedBy(a) {return (b) => Math.floor(b/a)}


console.log(five(times(seven()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

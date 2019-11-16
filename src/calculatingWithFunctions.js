//Solution 1

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

//Solution 2 (not mine, but very clever)
const
  id = x => x,
  number = x => (f = id) => f(x),
  [zero, one, two, three, four, five, six, seven, eight, nine] =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
  plus = x => y => y + x,
  minus = x => y => y - x,
  times = x => y => y * x,
  dividedBy = x => y => y / x;

console.log(five(times(seven()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3



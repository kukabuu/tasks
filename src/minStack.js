/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.*/

//Solution 1
var MinStack1 = function() {
	this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack1.prototype.push = function(x) {
	this.array.push(x);
};

/**
 * @return {void}
 */
MinStack1.prototype.pop = function() {
	this.array.pop();
};

/**
 * @return {number}
 */
MinStack1.prototype.top = function() {
	return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack1.prototype.getMin = function() {
	let min = Infinity;
	for (item of this.array) {
		min = Math.min(min, item);
	}
	return min;
};

//Solution 2
var MinStack2 = function() {
	this.container = [];
	this.minArray = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack2.prototype.push = function(x) {
	this.container.push(x);
	if (
		this.minArray.length === 0 ||
		x < this.minArray[this.minArray.length - 1]
	) {
		this.minArray.push(x);
	}
};

/**
 * @return {void}
 */
MinStack2.prototype.pop = function() {
	if (
		this.container[this.container.length - 1] ===
		this.minArray[this.minArray.length - 1]
	) {
		this.container.pop();
		this.minArray.pop();
	} else {
		this.container.pop();
	}
};

/**
 * @return {number}
 */
MinStack2.prototype.top = function() {
	return this.container[this.container.length - 1];
};

/**
 * @return {number}
 */
MinStack2.prototype.getMin = function() {
	return this.minArray[this.minArray.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*let minStack = new MinStack1();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); //Returns -3.
minStack.pop();
console.log(minStack.top()); //Returns 0.
console.log(minStack.getMin()); //Returns -2.*/

let minStack2 = new MinStack2();
minStack2.push(-2);
minStack2.push(0);
minStack2.push(-3);
console.log(minStack2.getMin()); //Returns -3.
minStack2.pop();
console.log(minStack2.top()); //Returns 0.
console.log(minStack2.getMin()); //Returns -2.

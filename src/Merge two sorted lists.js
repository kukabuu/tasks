/*Merge two sorted linked lists and return it as 
a new list. The new list should be made by splicing 
together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
	let result = new ListNode();
	let temp = result;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			temp.next = l1;
			l1 = l1.next;
		} else {
			temp.next = l2;
			l2 = l2.next;
		}
		temp = temp.next;
	}
	while (l1) {
		temp.next = l1;
		l1 = l1.next;
		temp = temp.next;
	}
	while (l2) {
		temp.next = l2;
		l2 = l2.next;
		temp = temp.next;
	}
	return result.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const makeArray = function(list) {
	let arr = [];
	while (list) {
		arr.push(list.val);
		list = list.next;
	}
	return arr;
};

console.log(makeArray(list1));
console.log(makeArray(list2));
let result = mergeTwoLists(list1, list2);
console.log(makeArray(result));

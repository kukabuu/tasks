/*
	Given a singly linked list, determine if it is a palindrome.

	Example 1:

	Input: 1->2
	Output: false
	Example 2:

	Input: 1->2->2->1
	Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
	let arr = [];
	while (head !== null) {
			arr.push(head.val)
			head = head.next;
	}
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== arr[arr.length - 1 - i]) {
					return false
			}
	}
	return true;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

function convertArrToLinkedList(arr) {
  let head, current;
  arr.forEach(value => {
    if (!head) {
      head = new ListNode(value);
      current = head;
    } else {
      current.next = new ListNode(value);
      current = current.next;
    }
  });
  return head;
}
// Solution 1
// function reverseList(head) {
//   let arr = [];

//   while (head !== null) {
//     arr.unshift(head.val);
//     head = head.next;
//   }
//   return arr[0] === undefined ? head : convertArrToLinkedList(arr);
// }

//Solution 2
var reverseList = function(head) {
  let newHead = null,
    tmp = null;
  while (head !== null) {
    tmp = head;
    head = head.next;
    tmp.next = newHead;
    newHead = tmp;
  }
  return newHead;
};

let list1 = convertArrToLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(list1));

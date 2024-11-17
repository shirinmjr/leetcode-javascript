/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummyNode = new ListNode(0);
    let current = dummyNode;
    let carry = 0
    //which one is shorter??
    while (l1 !== null || l2 !== null || carry > 0) {
        const val1 = l1 ? l1.val : 0 ///if one finishes before the other one we leave 0 instead
        const val2 = l2 ? l2.val : 0

        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)

        current.next = new ListNode(sum % 10)
        current = current.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    return dummyNode.next

};


/** JAVASCRIPT ***
var addTwoNumbers = function (l1, l2) {
    const result = new ListNode(0);//reuslt object from ListNode holds on to the answer
    ///set the current to result which is the new empty link, 
    let current = result; //current keeps the track of current linked list
    let carry = 0;
    while (l1  || l2) {
        let sum = carry;
        if (l1 ) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10); //shifting the current one digit further
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry)
    }
    return result.next;
};
 */
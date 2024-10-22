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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow = head;
    let fast = head;
    let temp = null;
    // Move fast ahead by n + 1 nodes
    for (let i = 0; i < n; i++) {
        if (fast === null) return null; // Handle cases where n is larger than the length
        fast = fast.next;
    }
    // if n is equal to the length of the list it is a shift - case when we need to remove the head
    // meaning after shifting the fast pinter fast.next is null =>fast is null, while loop not going to run
    // Move both slow and fast until fast reaches the end
    while (fast !== null) {
        temp = slow;
        slow = slow.next;
        fast = fast.next;
    }
    // Remove the nth node from the end  
    temp ? temp.next = slow.next : head = slow.next

    return head
};
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

function deleteMiddle(head: ListNode | null): ListNode | null {
    // If the list has only one node, return null
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let prev = null
    while (fast != null && fast.next !== null) {
        // fast.next !== null && fast != null not the same and won't work
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev !== null) {

        prev.next = slow.next
    }
    return head

};
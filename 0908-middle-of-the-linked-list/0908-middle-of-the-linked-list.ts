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

function middleNode(head: ListNode | null): ListNode | null {
     let slow = head;
    let fast = head;
    // until we have not at the end of the list and there is at least 1 item left for fast pointer
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const values = new Set();
    let current = head;
    let previous = null;

    while (current !== null) {
        if (values.has(current.val)) {
            previous.next = current.next
        } else {
            values.add(current.val)
            previous = current
        }
        current = current.next;
    }
    return head
};
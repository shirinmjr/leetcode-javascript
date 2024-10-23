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

function partition(head: ListNode | null, x: number): ListNode | null {
    const dummy1 = new ListNode(0);
    const dummy2 = new ListNode(0);
    //These pointers will be used to append nodes to the two separate linked lists.
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = head;

    if (current === null) return null

    while (current !== null) {
        if (current.val < x) {
            prev1.next = current;
            prev1 = current;
        } else if (current.val >= x) {
            prev2.next = current;
            prev2 = current;
        }
        current = current.next;
    }
    // End the GreaterThanList to avoid cycles
    prev2.next = null;

    // Connect the two lists

    prev1.next = dummy2.next; // Skip the dummy node of the greater list

    // Return the head of the merged list, skipping the dummy node of the smaller list
    head = dummy1.next;

    return head;
};
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

function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let prev = null



    while (current !== null) {
        const next = current.next; // Save the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move prev to the current node
        current = next; // Move current to the next node

    }
    return prev; // Return the new head (previous node)
};

/*
var reverseList = function (head) {
    let prev = null;
    let next = null;

    while (head !== null) {
        next = head.next;
        head.next = prev;
        prev = head;
        head=next;
    }

    return prev
};
*/
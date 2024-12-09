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

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // Empty or single-node list is a palindrome

    // Step 1: Find the middle of the list
    let slow = head
    let fast = head
    while (fast !== null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }

    // Step 2: Reverse the second half
    let prev = null
    let current = slow
    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

        // Step 3: Compare the two halves
    let firstHalf = head;
    let secondHalf = prev; // prev is the head of the reversed second half
    while (secondHalf !== null) {

        if (firstHalf.val !== secondHalf.val) return false;

        firstHalf = firstHalf.next
        secondHalf = secondHalf.next

    }


    return true
};
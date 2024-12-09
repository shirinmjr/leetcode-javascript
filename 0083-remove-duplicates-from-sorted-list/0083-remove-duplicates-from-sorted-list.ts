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
    const mySet = new Set();
    let current = head
    let prev = current
    while (current !== null) {
        if (mySet.has(current.val)) {//it's a duplicate!

            prev.next = current.next
   
        }else{
        mySet.add(current.val)
        prev = current
        }





        current = current.next
    }
    return head
};
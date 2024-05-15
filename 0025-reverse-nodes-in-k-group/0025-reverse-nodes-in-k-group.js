/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
     function reverseLinkedList(start, end) {
        let prev = null;
        let current = start;
        while (current !== end) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        return prev;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (head) {
        let groupStart = head;
        let groupEnd = head;

        // Move groupEnd to the kth node
        for (let i = 1; i < k && groupEnd; i++) {
            groupEnd = groupEnd.next;
        }

        // If there are less than k nodes remaining, break
        if (!groupEnd) break;

        // Save the next node after groupEnd
        let nextGroupStart = groupEnd.next;

        // Reverse the current group
        let reversedGroupStart = reverseLinkedList(groupStart, nextGroupStart);

        // Connect the reversed group to the previous group
        prevGroupEnd.next = reversedGroupStart;

        // Connect the end of the reversed group to the next group's start
        groupStart.next = nextGroupStart;

        // Update prevGroupEnd for the next iteration
        prevGroupEnd = groupStart;

        // Move head to the start of the next group
        head = nextGroupStart;
    }

    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result;
};
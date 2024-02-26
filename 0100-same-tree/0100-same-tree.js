/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true; // both trees are null => they are the same
    if (!p || !q) return false; //If only one is null => they are not the same
    if (p.val !== q.val) { //check the values of current nodes if not the same, return false
        return false;
    }
    // Recursively check left and right subtrees
    // All the left exist in both, all the right exist in both, value of each every node is the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
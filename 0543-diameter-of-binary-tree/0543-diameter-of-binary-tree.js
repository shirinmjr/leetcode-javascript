/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    const depth = function (node) {
        if (!node) return 0;
        //console.log("left", node.left, "right", node.right, "node", node.val)

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        //console.log("leftDepth", leftDepth, "rightDepth", rightDepth, "node", node.val)

        // Update diameter if necessary
        diameter = Math.max(diameter, leftDepth + rightDepth);
        //console.log("diameter", diameter)
        // Return depth of current node
        return Math.max(leftDepth, rightDepth) + 1;
    };

    depth(root);
    return diameter;
};
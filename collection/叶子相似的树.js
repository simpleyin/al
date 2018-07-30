// 考虑一个二叉树的所有叶子。这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

// 举个例子，给定一个如上图所示的树，其叶值序列为 (6, 7, 4, 9, 8) 。

// 如果两个二叉树的叶值序列相同，我们就认为它们是 叶相似的。

// 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，返回 true；否则返回 false 。

/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
     this.val = val;
    this.left = this.right = null;
 }

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let res1 = [], res2 = [];
    search(root1, res1);
    search(root2, res2);
    if (root1.join("") === root2.join("")) return true;
    else return false;
};

var search = function(node, res) {
    if (node.left === null && node.right === null) {
        res.push(node.val);
        return;
    }
    if (node.left !== null && node.right !== null) {
        search(node.left, res);
        search(node.right, res);
    }
    else if (node.left !== null && node.right === null) {
        search(node.left, res);
    }
    else if (node.left === null && node.right !== null) {
        search(node.right, res);
    }

}
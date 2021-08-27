/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root) {
    //if tree is empty
    if (root === null) return 0;

    // if the tree is a leaf node then return 1
    if (root.left === null && root.right === null) return 1;

    // when there is no left subtree search the right recursively
    if (root.left === null) return this.minDepth(root.right) + 1;

    // when there is no right subtree search the left recursively
    if (root.right === null) return this.minDepth(root.left) + 1;

    return Math.min(
      this.minDepth(root.left),
      this.minDepth(root.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root) {
    //if tree is empty
    if (root === null) return 0;

    // if the tree is a leaf node then return 1
    if (root.left === null && root.right === null) return 1;

    // when there is no left subtree search the right recursively
    if (root.left === null) return this.maxDepth(root.right) + 1;

    // when there is no right subtree search the left recursively
    if (root.right === null) return this.maxDepth(root.left) + 1;

    return Math.max(
      this.maxDepth(root.left),
      this.maxDepth(root.right)) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root = this.root) {
    let sum = 0;

    const maxSummer = (subRoot) => {
      //if tree is empty
      if (subRoot === null) return 0;

      const leftMaxSum = maxSummer(subRoot.left);
      const rightMaxSum = maxSummer(subRoot.right);

      sum = Math.max(subRoot.val + leftMaxSum + rightMaxSum, sum);

      return Math.max(0,
        leftMaxSum + subRoot.val,
        rightMaxSum + subRoot.val);
    }

    maxSummer(root)
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, root = this.root) {
    let nextLargest = null;
    //if tree is empty
    if (root === null) return null;
    //convert tree to treeQueue for a BFS
    let treeQueue = [root];

    while (treeQueue.length) {
      const currNode = treeQueue.shift();

      const lessThanCurrVal = !nextLargest || currNode.val < nextLargest;

      if (currNode.val > lowerBound && lessThanCurrVal) nextLargest = currNode.val;

      if (currNode.left) treeQueue.push(currNode.left);

      if (currNode.right) treeQueue.push(currNode.right);
    }

    return nextLargest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

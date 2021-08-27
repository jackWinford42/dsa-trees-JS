/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(root = this.root) {
    let sum = 0;
    //return zero is a node is null
    if (!root) return sum;

    //recursively go over every child node
    if (root.children) {
      root.children.forEach(child => {
        sum += this.sumValues(child);
      });
    }
  
    return sum + root.val;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(root = this.root) {
    let evens = 0;
    //return zero is a node is null
    if (!root) return evens;

    //recursively go over every child node
    if (root.children) {
      root.children.forEach(child => {
        evens += this.countEvens(child);
      });
    }

    // 1 - root.val % 2  is one if root.val is even and
    // 0 if root.val is odd
    return evens + 1 - root.val % 2;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, root = this.root) {
    let greats = 0;
    //return zero is a node is null
    if (!root) return greats;

    //recursively go over every child node
    if (root.children) {
      root.children.forEach(child => {
        greats += this.numGreater(lowerBound, child);
      });
    }
    let isGreater = 0;
    if (lowerBound < root.val) isGreater++;
    return greats + isGreater;
  }
}

module.exports = { Tree, TreeNode };

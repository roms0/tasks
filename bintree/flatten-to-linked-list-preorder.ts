// N time
// N space

import { TreeNode } from "./tree-node";

function flattendfs(root: TreeNode | null): void {
  // flatten root subtree and return its tail
  function dfs(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const leftSubtreeTail = dfs(root.left);
    const rightSubtreeTail = dfs(root.right);

    // only if left subtree not empty we need to do
    // anything
    if (leftSubtreeTail) {
      leftSubtreeTail.right = root.right;
      root.right = root.left;
      root.left = null;
    }

    // if here were no rightsubtree return left
    // or the root itself if none present
    return rightSubtreeTail || leftSubtreeTail || root;
  }

  dfs(root);
}

// N time
// 1 space

function flatten(root: TreeNode | null): void {
  let cur = root;

  while (cur) {
    if (cur.left) {
      let prev = cur.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }

    cur = cur.right;
  }
}

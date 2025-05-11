export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function inorderToTree(inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;

  // Helper to recursively build the tree
  const build = (left: number, right: number): TreeNode | null => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(inorder[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);
    return node;
  };

  return build(0, inorder.length - 1);
}

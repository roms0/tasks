import { inorderToTree, TreeNode } from "./tree-node";

function clone1(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  return new TreeNode(root.val, clone1(root.left), clone1(root.right));
}

function clone2(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const stack = [{ ref: root, data: new TreeNode(root.val) }];
  const cloneRoot = stack[0].data;
  while (stack.length > 0) {
    const { ref, data } = stack.pop() as { ref: TreeNode; data: TreeNode };
    if (ref.right) {
      data.right = new TreeNode(ref.right.val);
      stack.push({ ref: ref.right, data: data.right });
    }
    if (ref.left) {
      data.left = new TreeNode(ref.left.val);
      stack.push({ ref: ref.left, data: data.left });
    }
  }
  return cloneRoot;
}

const data = [4, 5, 7, 9, 44, 67, 89, 365, 767];

console.log(clone1(inorderToTree(data))?.val);
console.log(clone2(inorderToTree(data))?.val);

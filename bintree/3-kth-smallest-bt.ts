import { inorderToTree, TreeNode } from "./tree-node";

function ksmall1(root: TreeNode | null, k: number): number | null {
  let smallest = 0;
  let result: number | null = null;

  const inorder = (node: TreeNode | null) => {
    if (!node || result !== null) return;
    inorder(node.left);

    smallest++;

    if (smallest === k) {
      result = node.val;
      return;
    }

    inorder(node.right);
  };

  inorder(root);

  return result;
}

const data = inorderToTree([1, 2, 3, 4, 5, 6]);
console.log(ksmall1(data, 1));

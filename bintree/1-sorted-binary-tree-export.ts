import { inorderToTree, TreeNode } from "./tree-node";

// recursive
// time         N
// space        N
function sorted1(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return [];
  result.push(...sorted1(root.left).concat([root.val], sorted1(root.right)));
  return result;
}

// iterative
// time         N
// space        N
function sorted2(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let current = root;
  while (current || stack.length > 0) {
    // push to stack until leftmost node present
    while (current) {
      stack.push(current);
      current = current.left;
    }
    // if not leftmost! then push leftmost from the stack to result
    // then search for leftmost in right subtree
    current = stack.pop() as TreeNode;
    result.push(current.val);
    current = current.right;
  }
  return result;
}

const data = [4, 5, 7, 9, 44, 67, 89, 365, 767];

console.log(sorted2(inorderToTree(data)));
console.log(sorted1(inorderToTree(data)));

type BinaryNode<T> = any;
//function for recurse
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) return path;

  // recurse
  // pre

  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  // post
  return path;
}

// Purpose: Contains pre-order traversal function for binary trees.
// head - the head of the binary tree to traverse. (Or the root of the binary subaree.)
export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

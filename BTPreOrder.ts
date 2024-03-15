type BinaryNode<T> = any;
//function for recurse
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) return path;

  // recurse
  // pre
  path.push(curr.value);

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);
  // post
  return path;
}

// Purpose: Contains pre-order traversal function for binary trees.
// head - the head of the binary tree to traverse. (Or the root of the binary subtree.)
export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

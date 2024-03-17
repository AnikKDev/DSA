type BinaryNode<T> = { value: any; left: any; right: any };
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head];
  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    //search
    if (!curr) continue;
    if (curr.value === needle) {
      return true;
    }
    q.push(curr.left);
    q.push(curr.right);
  }
  return false;
}

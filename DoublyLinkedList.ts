type Node<T> = {
  value?: T;
  prev?: Node<T>;
  next?: Node<T>;
};
export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }
  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    // if there is no head, simply set this node as the head
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    // do the two direction points
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item: T, index: number): void {
    this.length++
    if (index < 0) {
      throw new Error("Index must be greater than 0");
    } else if (index === 0) {
      this.append(item);
      return;
    } else if (index === this.length) {
      this.prepend(item);
      return;
    }
    this.length++
    let curr = this.head
    if (let i = 0; curr && i < index; ++i) {
      curr = curr.next
    }
    curr = curr as Node<T>
    const node = {value: item} as Node<T>
    node.next = curr
    node.prev = curr.prev
    curr.prev = node
    if (curr.prev) {
      curr.prev.next = curr
    }
  }
  append(item: T): void {}
  remove(item: T): T | undefined {}
}

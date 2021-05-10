interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private head?: StackNode<T>;
  private _size: number = 0;
  get size() {
    return this._size;
  }

  push(value: T): void {
    const newStackNode: StackNode<T> = {
      value: value,
      next: this.head,
    };

    this.head = newStackNode;
    this._size += 1;
  }

  pop(): T {
    // null == undefined, null !== undefined
    if (this.head == null) {
      throw new Error('stack is empty');
    }

    const ret = this.head;
    this.head = ret.next;
    this._size -= 1;
    return ret.value;
  }
}

const stack = new StackImpl<string>();
stack.push('kwanghwan');
stack.push('dddd');

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>();
stack2.push(111);
stack2.push(777);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}

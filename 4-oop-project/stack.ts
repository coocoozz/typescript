interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private head?: StackNode;
  private _size: number = 0;
  get size() {
    return this._size;
  }

  push(value: string): void {
    const newStackNode: StackNode = {
      value: value,
      next: this.head,
    };

    this.head = newStackNode;
    this._size += 1;
  }

  pop(): string {
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

const stack = new StackImpl();
stack.push('hwan');
stack.push('kwang');
stack.push('kim');

console.log(stack.size);

while (stack.size !== 0) {
  console.log(stack.pop());
}

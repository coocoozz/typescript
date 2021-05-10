{
  interface Either {
    left: () => number;
    right: () => number;
  }

  class SimpleEither implements Either {
    constructor(private leftValue: number, private rightValue: number) {}

    left(): number {
      return this.leftValue;
    }

    right(): number {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(7, 9);
  either.left(); // 7
  either.right(); // 9
}

{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(777, 'kwanghwan');
  console.log(either.left());
  console.log(either.right());
}

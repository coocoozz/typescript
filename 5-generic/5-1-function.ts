{
  // 인자로 숫자만 받을수 있음..
  function checkNotNullOnlyNumber(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  // 함수 리턴 결과 타입을 보장할수가 없다
  function checkNotNullAny(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid');
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid');
    }
    return arg;
  }

  const number: number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}

{
  // Type assertion
  function test(): any {
    return 'hello';
  }
  const result = test(); // result 의 타입은 any

  // result의 타입은 string이라고 확신한 경우, type assertion을 통해 타입을 캐스팅한다
  console.log((result as string).length); // 방법 1
  console.log((<string>result).length); // 방법 2

  // 하지만 type assertion이 잘못된 경우 예기치 못한 결과가 나올수 있다
  // undefined가 리턴되거나, 실행과정에서 오류 내고 죽던가...
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 이 코드는 오류내면서 런타임에 죽는다..

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // number array 혹은 undefined가 리턴될수 있다
  // numbers.push(1); -> numbers가 undefined일 수도 있으므로, 잘못된 코드다

  // 무조건 undefined가 아니라고 확신할 수 있다면..
  // 방법1
  const numbers2 = findNumbers()!;

  // 방법2
  const numbers3 = findNumbers();
  numbers3?.push(1);
}

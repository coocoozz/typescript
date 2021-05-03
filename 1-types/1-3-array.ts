{
  // Array
  const fruits: string[] = ['a', 'b', 'c'];
  const scores: Array<number> = [1, 2, 3];

  function printArray(params: readonly number[]) {
    // readonly는 generic 타입으로 정의된 인자에 대해서는 사용이 불가능 하다
  }

  // Tuple: 서로 다른 타입의 데이터를 담을 수 있다. interface/type alias/class로 대체 가능하다면 가급적 피하는 것이 좋다
  let student: [string, number];
  student = ['kwang', 11];
  student[0]; // kwang
  student[1]; // 11

  const [name, age] = student; // 가독성이 떨어지므로 destructuring 이용하면 좀 더 편함
}


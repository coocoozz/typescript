// Type inference
let text = 'hello'; // 자동으로 text 변수는 string으로 타입 추론이 되버림

function print(message = 'message') {
  // 파라미터는 string, 리턴은 void로 자동 타입 추론이 되버림
  console.log(message);
}

function add(x: number, y: number) {
  // 리턴값을 통해 리턴 타입은 number로 자동 타입 추론이 되버림
  return x + y;
}

const result = add(1, 2); // result는 add 함수 결과 타입에 따라 number로 자동 타입 추론이 되버림

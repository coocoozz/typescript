{
  // Javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // Typescript
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
}

{
  // Javascript
  // function jsFetchNum(id) {
  //   //...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  tsFetchNum('hwan')
    .then(res => console.log(`ts: ${res}`));
}

{
  // Optional parameters
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('kwanghwan', 'kim');
  printName('kwanghwan');
  printName('kk', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage('hihihi');
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
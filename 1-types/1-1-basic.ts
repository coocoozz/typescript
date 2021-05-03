{
  // Javascript
  // let es6
  let name = 'hello';
  name = 'hi';

  // const
  const age = 5;
  // age = 5; XXXX
}

{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undifined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'kwanghwan';

  // boolean
  const bool: boolean = true;

  // undefined
  let name: undefined; // XXXXX
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null; // XXXX
  let person2: string | null;
  person2 = null;
  person2 = 'kwanghwan';

  // example
  function find(): number | undefined {
    return undefined;
  }

  // unknown -> 가능하면 쓰지 않도록... 타입이 없는 javascript와 연동을 위해
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any -> 가능하면 쓰지 않도록...
  let anything: any = 0;
  anything = 'hello';

  // void -> 함수에서 그 어떤 것도 리턴하지 않을 경우
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 쓰이는 경우가 거의 없음

  // never -> 함수에서 절대 return 하지 않을 경우에 쓴다
  function throwError(message: string): never {
    // message -> server (log)
    // return new Error(message);
    while (true) {

    }
  }

  // object -> 이것도 가능하면 사용하지 않는 것이 좋다
  // 기존 object, array 등 그 어떤것도 할당 가능....
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'kwang'});
  acceptSomeObject({animal: 'dog'});
}
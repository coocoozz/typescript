{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
  };

  // class
  class Pos1 implements PositionType {
    x: number = 1;
    y: number = 2;
  }
  class Pos2 implements PositionInterface {
    x: number = 1;
    y: number = 2;
  }

  // extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // only interfaces can be merged -> type은 불가능....
  interface ExInterface {
    x: number;
    y: number;
  }
  interface ExInterface {
    z: number;
  }

  class ExClass implements ExInterface {
    x: number = 1;
    y: number = 2;
    z: number = 3;
  }

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // name => string

  // Interface: api 규격을 정의할때 쓰자
  // Type: 데이터의 성질, 종류 등을 정의할때 쓰자
}

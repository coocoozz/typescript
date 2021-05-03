{
  // Type alias : 사용자 정의 type을 선언할 수 있음.. C에서 typedef와 유사한 컨셉
  type Text = string;
  const name1: string = 'kwang';
  const name2: Text = 'hwan';

  type Num = number;
  const age1: number = 11;
  const age2: Num = 22;

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'kwanghwan',
    age: 10,
  };

  // String Literal Types
  type Name = 'name';
  let name: Name = 'name'; // only 'name'만 할당 가능

  type JSON = 'json';
  const json: JSON = 'json'; // only 'json'만 할당 가능

  
}
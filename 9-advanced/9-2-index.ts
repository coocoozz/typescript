{
  const obj = {
    name: 'kwanghwan',
  };
  obj.name; // kwanghwan
  obj['name']; // kwanghwan

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string type
  const text: Name = 'hahah'; // only string value만 할당 가능

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female'
  };

  const person: Person = {
    name: 'kkk',
    gender: 'male',
  };
}

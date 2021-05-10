{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time');
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time');
    }

    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다...
  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  const kwang = new FullTimeEmployee();
  const hwan = new PartTimeEmployee();
  const kwangAfterPay = pay(kwang);
  const hwanAfterPay = pay(hwan);

  // kwangAfterPay.workFullTime() 불가...
  // hwanAfterPay.workPartTime() 불가...

  // generic에 특정 조건을 부가하는 개념이 constrains
  function payGood<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }
}

{
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj1 = {
    name: 'kwanghwan',
    age: 36,
  };

  const obj2 = {
    animal: 'horse',
  };

  console.log(getValue(obj1, 'name'));
  console.log(getValue(obj1, 'age'));
  console.log(getValue(obj2, 'animal'));
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public / private / protected
  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number; // instance (object) level

    private constructor(initCoffeeBeans: number) {
      this.coffeeBeans = initCoffeeBeans;
    }

    // constructor를 통해서 객체를 생성하는 것을 방지하기 위해 static function 제공 + constructor를 private으로 선언한다
    static makeCoffeeMachine(initCoffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(initCoffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans <= 0) {
        throw new Error(`value for beans should be greater than 0: ${beans}`);
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = CoffeeMachine.makeCoffeeMachine(100);
  coffeeMachine.fillCoffeeBeans(777);

  // Getter / Setter
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('value for age should be greater than 0');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('kwangwhan', 'kim');
  console.log(user.fullName);
  user.age = 11;
  console.log(user.age);
}

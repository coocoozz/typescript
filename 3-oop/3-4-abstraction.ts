{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public / private / protected
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number; // instance (object) level

    private constructor(initCoffeeBeans: number) {
      this.coffeeBeans = initCoffeeBeans;
    }

    // constructor를 통해서 객체를 생성하는 것을 방지하기 위해 static function 제공 + constructor를 private으로 선언한다
    static makeCoffeeMachine(initCoffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(initCoffeeBeans);
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling... ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number) {
      if (beans <= 0) {
        throw new Error(`value for beans should be greater than 0: ${beans}`);
      }
      this.coffeeBeans += beans;
      console.log('fill coffee beans...');
    }

    clean() {
      console.log('cleaning the machine...');
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBaristar {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(3);
      console.log(coffee);
      this.machine.fillCoffeeBeans(33);
      this.machine.clean();
    }
  }

  const coffeeMachine: CoffeeMachine = CoffeeMachine.makeCoffeeMachine(100);
  coffeeMachine.fillCoffeeBeans(777);
  coffeeMachine.makeCoffee(2);

  //prettier-ignore
  const coffeeMachine2: CommercialCoffeeMaker = CoffeeMachine.makeCoffeeMachine(100);
  coffeeMachine2.fillCoffeeBeans(777);
  coffeeMachine2.makeCoffee(2);
  coffeeMachine2.clean();

  const coffee: CoffeeMachine = CoffeeMachine.makeCoffeeMachine(100);
  const amateurUser = new AmateurUser(coffee);
  const proBaristar = new ProBaristar(coffee);
  amateurUser.makeCoffee();
  proBaristar.makeCoffee();
}

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public / private / protected
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number; // instance (object) level

    constructor(initCoffeeBeans: number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(initCoffeeBeans: number, public readonly serialNumber: string) {
      super(initCoffeeBeans);
    }

    private steamMilk() {
      console.log('steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  const machine = new CoffeeMachine(100);
  const latteMachine = new CaffeLatteMachine(100, 'SSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}

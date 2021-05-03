{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number; // instance (object) level

    constructor(initCoffeeBeans: number) {
      this.coffeeBeans = initCoffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      console.log(`pulling... ${shots}`);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      console.log(`pulling.... ${shots}`);
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines = [
    new CaffeLatteMachine(22, 'aaa'),
    new SweetCoffeeMachine(33),
  ];

  machines.forEach((machine: CoffeeMaker) => {
    console.log('---------------------------------');
    machine.makeCoffee(1);
  });
}

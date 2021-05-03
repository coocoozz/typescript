{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans: number; // instance (object) level

    constructor(initCoffeeBeans: number) {
      this.coffeeBeans = initCoffeeBeans;
    }

    static makeCoffeeMachine(initCoffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(initCoffeeBeans);
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

  const coffeeMachine = new CoffeeMachine(100);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);

  const coffee2 = CoffeeMachine.makeCoffeeMachine(100).makeCoffee(3);
  console.log(coffee2);
}

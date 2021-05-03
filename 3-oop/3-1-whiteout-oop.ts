{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('not enough coffee beans');
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans = 100;
  const coffee = makeCoffee(2);
  console.log(coffee);
}

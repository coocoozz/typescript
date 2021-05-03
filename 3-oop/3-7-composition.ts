{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

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

  interface MilkSteamer {
    steamMilk(coffee: CoffeeCup): CoffeeCup;
  }

  interface SugarMixer {
    mixSugar(coffee: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkSteamer {
    private getMilk(): boolean {
      console.log('getting some cheap milk..');
      return true;
    }

    steamMilk(coffee: CoffeeCup): CoffeeCup {
      return {
        ...coffee,
        hasMilk: this.getMilk(),
      };
    }
  }

  class FancyMilkSteamer implements MilkSteamer {
    private getMilk(): boolean {
      console.log('getting some fancy milk..');
      return true;
    }

    steamMilk(coffee: CoffeeCup): CoffeeCup {
      return {
        ...coffee,
        hasMilk: this.getMilk(),
      };
    }
  }

  class CheapSugarMixer implements SugarMixer {
    private getSuger(): boolean {
      console.log('getting some sugar...');
      return true;
    }

    mixSugar(coffee: CoffeeCup): CoffeeCup {
      return {
        ...coffee,
        hasSugar: this.getSuger(),
      };
    }
  }

  class FancySugarMixer implements SugarMixer {
    private getSuger(): boolean {
      console.log('getting some sugar...');
      return true;
    }

    mixSugar(coffee: CoffeeCup): CoffeeCup {
      return {
        ...coffee,
        hasSugar: this.getSuger(),
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      initCoffeeBeans: number,
      public readonly serialNumber: string,
      private steamer: MilkSteamer
    ) {
      super(initCoffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.steamer.steamMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(initCoffeeBeans: number, private mixer: SugarMixer) {
      super(initCoffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.mixer.mixSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      initCoffeeBeans: number,
      private steamer: MilkSteamer,
      private mixer: SugarMixer
    ) {
      super(initCoffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const steamedCoffee = this.steamer.steamMilk(coffee);
      return this.mixer.mixSugar(steamedCoffee);
    }
  }

  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const cheapSugarMixer = new CheapSugarMixer();
  const fancySugarMixer = new FancySugarMixer();

  const machines = [
    new CaffeLatteMachine(10, 'aa', cheapMilkSteamer),
    new CaffeLatteMachine(10, 'aa', fancyMilkSteamer),
    new SweetCoffeeMachine(10, cheapSugarMixer),
    new SweetCoffeeMachine(10, fancySugarMixer),
    new SweetCaffeLatteMachine(10, cheapMilkSteamer, cheapSugarMixer),
    new SweetCaffeLatteMachine(10, fancyMilkSteamer, fancySugarMixer),
  ];

  machines.forEach((machine) => {
    console.log('-----------------------------------');
    machine.makeCoffee(1);
  });
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  public name: string;
  public age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`)
  }
}

let user1: Greetable;

user1 = new Person("Fernando");

user1.greet("Olá");

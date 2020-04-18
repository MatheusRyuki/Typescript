interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
 return n1 + n2;
};

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

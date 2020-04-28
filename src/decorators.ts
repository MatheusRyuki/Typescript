// Decorador de First Class e trabalhando com Factories de Decoradores

const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

// Construindo Decoradores mais úteis

const withTemplate = (template: string, hookId: string) => {
  return <T extends {new(...args: any[]): {name: string}} >(OriginalConstructor: T) => {  
    return class extends OriginalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Renderizando template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    }
  };
};

@Logger("Logging - person")
@withTemplate("<h1>My Person Object</h1>", "app")
class Persona {
  name = "Max";

  constructor() {
    console.log("Criando o objeto Pessoa...");
  }
}

const pers = new Persona();
console.log(pers);

// Usando decoradores como propriedades

const Log = (target: any, propertyName: string | Symbol) => {
  console.log("Decorador como propriedade");
  console.log(target, propertyName);
};

// Decorador como acessório
const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log("Decorador como Acessório");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log3 = (target: any, name: string | Symbol  , descriptor: PropertyDescriptor) => {
  console.log("Decorador como Acessório de método");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log("Decorador como Acessório de parâmetro");
  console.log(target);
  console.log(name);
  console.log(position);
};

class Produto {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Valor Inválido");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}


const p1 = new Produto("Livro", 19);

// Usando decoradores para dar autobind
const autoBind = (_: any, _2 : string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
};

class Printer {
  message = "This works!";
  @autoBind
  showMessage () {
    console.log(this.message);
  }
}

const p  = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage)

// Decoradores para validação
const Required = () => {

};

const PositiveNumber = () => {

};

const Validate = (obj: object) => {

}


class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, n: number) {
    this.title = t;
    this.price = n;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!Validate(createdCourse)) {
    alert("erro!");
    return new Error();
  }
  console.log(createdCourse);
})
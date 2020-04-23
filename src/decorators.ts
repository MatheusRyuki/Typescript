// Decorador de First Class e trabalhando com Factories de Decoradores

const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

// Construindo Decoradores mais úteis

const withTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    console.log("Renderizando template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
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

class Produto {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

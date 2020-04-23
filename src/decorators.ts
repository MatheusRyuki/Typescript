// Decorador de First Class e trabalhando com Factories de Decoradores

const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  }
};

// Construindo Decoradores mais úteis

const withTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  }
};

@withTemplate("<h1>My Person Object</h1>", "app")
// @Logger("Logging - person")
class Persona {
  name = "Max";

  constructor() {
    console.log("Criando o objeto Pessoa...");
  }
}

const pers = new Persona();
console.log(pers);
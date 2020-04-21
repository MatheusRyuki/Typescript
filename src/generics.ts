// genéricos
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("FEITO!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

// Criando uma função genérica

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergeObj = merge<{ nome: string; hobby: string[] }, { idade: number }>(
  { nome: "Max", hobby: ["Esportes"] },
  { idade: 30 }
);
console.log(mergeObj.hobby);

// Outra função genérica 

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T) => {
  let descriptionText = "Sem valor";
  if (element.length > 0) {
    descriptionText = `Tem ${element.length} elementos`;
  }

  return [element, descriptionText];
};

console.log(countAndDescribe(["Teste", "Esportes"]));

// Intersecção de tipos

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Fernando",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;


function adicionar(a: string, b: string):string;
function adicionar(a: number, b: number):number;
function adicionar (a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};



type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Nome: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privilégios: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Início em: ${emp.startDate}`);
  }
};

printEmployeeInformation(el);

// Mais tipos de guarda

class Car {
  drive() {
    console.log("Dirigindo...");
  }
}

class Truck {
  drive() {
    console.log("Dirigindo...");
  }

  loadCargo(amount: number) {
    console.log(`Carregando ${amount} produtos`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
};

useVehicle(v1);
useVehicle(v2);

// Uniões discriminadas

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  groundSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch(animal.type) {
    case "bird":
     speed = animal.flyingSpeed;
     break;
    case "horse":
      speed = animal.groundSpeed;
  }
  console.log(`Movendo com a velocidade de ${speed}`)
}

moveAnimal({type: "horse", groundSpeed: 10})

// Castando tipos
const paragraph = <HTMLInputElement>document.getElementById("user-input")! as HTMLInputElement;
paragraph.value = "Alô";

// Propriedades de Index
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "E-mail não válido",
  usuario: "Precisa começar com uma letra maiuscúla"
};

// Sobrecarregamento de Função

const result = adicionar("Max", "raimundo");
result.split(" ");
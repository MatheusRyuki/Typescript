"use strict";
var el = {
    name: "Fernando",
    privileges: ["create-server"],
    startDate: new Date(),
};
var adicionar = function (a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
var printEmployeeInformation = function (emp) {
    console.log("Nome: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privil\u00E9gios: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("In\u00EDcio em: " + emp.startDate);
    }
};
printEmployeeInformation(el);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Dirigindo...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Dirigindo...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Carregando " + amount + " produtos");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
var useVehicle = function (vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
};
useVehicle(v1);
useVehicle(v2);
var moveAnimal = function (animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.groundSpeed;
    }
    console.log("Movendo com a velocidade de " + speed);
};
moveAnimal({ type: "horse", groundSpeed: 10 });
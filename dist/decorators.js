"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Logger = function (logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
var withTemplate = function (template, hookId) {
    return function (constructor) {
        console.log("Renderizando template");
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
};
var Persona = (function () {
    function Persona() {
        this.name = "Max";
        console.log("Criando o objeto Pessoa...");
    }
    Persona = __decorate([
        Logger("Logging - person"),
        withTemplate("<h1>My Person Object</h1>", "app")
    ], Persona);
    return Persona;
}());
var pers = new Persona();
console.log(pers);
var Log = function (target, propertyName) {
    console.log("Decorador como propriedade");
    console.log(target, propertyName);
};
var Produto = (function () {
    function Produto(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Produto.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("Valor Inválido");
            }
        },
        enumerable: true,
        configurable: true
    });
    Produto.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Produto.prototype, "title", void 0);
    return Produto;
}());

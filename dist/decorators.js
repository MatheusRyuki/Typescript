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
        withTemplate("<h1>My Person Object</h1>", "app")
    ], Persona);
    return Persona;
}());
var pers = new Persona();
console.log(pers);

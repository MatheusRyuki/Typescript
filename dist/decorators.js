"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Logger = function (logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
};
var withTemplate = function (template, hookId) {
    return function (OriginalConstructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log("Renderizando template");
                var hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(OriginalConstructor));
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
var Log2 = function (target, name, descriptor) {
    console.log("Decorador como Acessório");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
var Log3 = function (target, name, descriptor) {
    console.log("Decorador como Acessório de método");
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
var Log4 = function (target, name, position) {
    console.log("Decorador como Acessório de parâmetro");
    console.log(target);
    console.log(name);
    console.log(position);
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
    __decorate([
        Log2
    ], Produto.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Produto.prototype, "getPriceWithTax", null);
    return Produto;
}());
var p1 = new Produto("Livro", 19);
var autoBind = function (_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};
var Printer = (function () {
    function Printer() {
        this.message = "This works!";
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        autoBind
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var p = new Printer();
var button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
var Course = (function () {
    function Course(t, n) {
        this.title = t;
        this.price = n;
    }
    return Course;
}());
var courseForm = document.querySelector("form");
courseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var titleEl = document.getElementById("title");
    var priceEl = document.getElementById("price");
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    console.log(createdCourse);
});

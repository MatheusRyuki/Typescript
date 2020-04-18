"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(n) {
        if (n === void 0) { n = "Padrão"; }
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ", " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("João");
user1.greet("Olá");

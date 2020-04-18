"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ", " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Fernando");
user1.greet("Olá");

"use strict";
var user1;
user1 = {
    name: "Fernando",
    age: 20,
    greet: function (phrase) {
        console.log(phrase + ", " + this.name);
    }
};
user1.greet("Olá");

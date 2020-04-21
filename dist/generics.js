"use strict";
var names = [];
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("FEITO!");
    }, 2000);
});
promise.then(function (data) {
    data.split(" ");
});
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
var mergeObj = merge({ nome: "Max", hobby: ["Esportes"] }, { idade: 30 });
console.log(mergeObj.hobby);

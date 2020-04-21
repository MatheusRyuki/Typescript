"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var countAndDescribe = function (element) {
    var descriptionText = "Sem valor";
    if (element.length > 0) {
        descriptionText = "Tem " + element.length + " elementos";
    }
    return [element, descriptionText];
};
console.log(countAndDescribe(["Teste", "Esportes"]));
var extractAndConvert = function (obj, key) {
    return obj[key];
};
extractAndConvert({ name: "teste" }, "name");
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
var createCourseGoal = function (title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
var names = ["Max", "Manu"];

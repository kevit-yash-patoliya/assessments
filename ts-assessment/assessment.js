"use strict";
// TASK 1: =================================================Create a function==========================================
function greeting(name, age) {
    return `Hey! your name is ${name} and you are ${age} years old`;
}
const message = greeting("Yash", 20);
console.log("Task 1: ======");
console.log(message);
console.log("\n");
// TASK 2: ==================================================Union varible ============================================
let unionVar = "hello";
function checkType(unionVar) {
    if (typeof unionVar === "string") {
        console.log("The type is string");
    }
    else {
        console.log("The type is number");
    }
}
console.log("Task 2: ======");
checkType(unionVar);
let newVar = 10;
console.log("==========using type keyword==========");
checkType(newVar);
console.log("\n");
const obj = {
    name: "Yash",
    age: 20
};
console.log("Task 3: ======");
console.log(obj);
console.log("\n");
const optionalObjWithoutEmail = {
    name: "Yash",
    age: 20
};
const optionalObjWithEmail = {
    name: "Yash",
    age: 20,
    email: "abc@email.com"
};
console.log("Task 4: ======");
console.log("without email");
console.log(optionalObjWithoutEmail);
console.log("with email");
console.log(optionalObjWithEmail);
console.log("\n");
// TASK 5: ==================================================Car Class ===================================================
class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(speed) {
        this.speed = speed;
        console.log(`New Speed is ${this.speed}`);
    }
    // TASK 6: ==================================================Modify Car Class===================================================
    getSpeed() {
        return this.speed;
    }
}
console.log("Task 5: ======");
const carInstance = new Car("BMW", 20);
carInstance.accelerate(50);
console.log("\n");
console.log("Task 6: ======");
const modifyCar = new Car("TATA", 30);
console.log(modifyCar.getSpeed());
console.log("\n");
// TASK 7: ==================================================Generic function===================================================
function identity(value) {
    return value;
}
console.log("Task 7: ======");
console.log(identity("hello"));
console.log(identity(20));
console.log(identity(true));
console.log("\n");
let data = ["Yash", 20];
console.log("Task 8: ======");
console.log(data);
console.log("\n");
// TASK 9: ==================================================Type assertion===================================================
let typeAssertion = "hello";
typeAssertion = typeAssertion;
console.log("Task 9: ======");
console.log(typeAssertion);
console.log("\n");
// TASK 10: ==================================================Fix snippet code===================================================
/* error verion

    function displayLength(value: string | number) {
        console.log(value.length) //Error: Property 'length' does not exist on type 'number'
    }

 */
// fixed version
function displayLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log("Value is a number");
    }
}
console.log("Task 10: ======");
displayLength(45);
displayLength("ASSESSMENT");

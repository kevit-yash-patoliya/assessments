// TASK 1: =================================================Create a function==========================================

function greeting(name:string,age:number):string{
    return `Hey! your name is ${name} and you are ${age} years old`
}

const message = greeting("Yash",20)

console.log("Task 1: ======")
console.log(message)
console.log("\n")
// TASK 2: ==================================================Union varible ============================================

let unionVar:string|number = "hello"

function checkType(unionVar:string|number){
    if(typeof unionVar === "string"){
        console.log("The type is string")
    }else{
        console.log("The type is number")
    }
}

console.log("Task 2: ======")
checkType(unionVar)

// using type keyword

type newUnion = string|number;
let newVar:newUnion = 10
console.log("==========using type keyword==========")
checkType(newVar)
console.log("\n")

// TASK 3: ==================================================Interface ====================================================

interface Person {
    name:string;
    age:number;
}

const obj : Person = {
    name:"Yash",
    age:20
}
console.log("Task 3: ======")
console.log(obj)
console.log("\n")

// TASK 4: ==================================================Interface Optional properties ===================================================

interface optionalPerson extends Person{
    email?:string;
}

const optionalObjWithoutEmail : optionalPerson = {
    name:"Yash",
    age:20
}
const optionalObjWithEmail : optionalPerson = {
    name:"Yash",
    age:20,
    email:"abc@email.com"
}
console.log("Task 4: ======")
console.log("without email")
console.log(optionalObjWithoutEmail)
console.log("with email")
console.log(optionalObjWithEmail)
console.log("\n")

// TASK 5: ==================================================Car Class ===================================================

class Car{
    brand : string 
    private speed : number 
    constructor(brand :string, speed:number){
        this.brand = brand
        this.speed = speed
    }

    // fix: accelerate function now increase a speed
    accelerate(speed:number){
        this.speed = speed+1;
        console.log(`New Speed is ${this.speed}`)
    }

    // TASK 6: ==================================================Modify Car Class===================================================
    getSpeed(){
        return this.speed
    }

}

console.log("Task 5: ======")

const carInstance = new Car("BMW",20)
carInstance.accelerate(50)
console.log("\n")


console.log("Task 6: ======")
const modifyCar = new Car("TATA",30);
console.log(modifyCar.getSpeed())
console.log("\n")

// TASK 7: ==================================================Generic function===================================================

function identity<T> (value : T) : T {

    return value
}

console.log("Task 7: ======")
console.log(identity<string>("hello"))
console.log(identity<number>(20))
console.log(identity<boolean>(true))
console.log("\n")

// TASK 8: ==================================================Tuples===================================================

type person = [string,number]
let data:person = ["Yash",20]

console.log("Task 8: ======")
console.log(data)

console.log("\n")

// TASK 9: ==================================================Type assertion===================================================

let typeAssertion:unknown = "hello"

console.log("Task 9: ======")
console.log(typeAssertion)
//fix: length is printed
console.log((typeAssertion as string).length)

console.log("\n")

// TASK 10: ==================================================Fix snippet code===================================================


/* error verion

    function displayLength(value: string | number) {
        console.log(value.length) //Error: Property 'length' does not exist on type 'number'
    }

 */


// fixed version
function displayLength(value: string | number) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log("Value is a number");
    }
}
console.log("Task 10: ======")
displayLength(45)
displayLength("ASSESSMENT")



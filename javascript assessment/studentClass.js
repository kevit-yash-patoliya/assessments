class Student {
    constructor(name,grade){
        this.name = name
        this.grade = grade
    }

    display(){
        console.log(`Hey My name is ${this.name} and I got ${this.grade} in Maths`);
    }
}

const s = new Student("Yash","A++")

s.display()
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
    }
}

var student1 = new Student('Natavan');
student1.greet();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = void 0;
class Employee {
    name;
    age;
    salary;
    tasks;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    work() {
        let currTask = this.tasks.shift();
        this.tasks.push(currTask);
        console.log(this.name + currTask);
    }
    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
        return this.salary;
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.');
    }
}
exports.Junior = Junior;
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}
exports.Senior = Senior;
class Manager extends Employee {
    divident;
    constructor(name, age) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }
    getSalary() {
        return this.salary + this.divident;
    }
}
exports.Manager = Manager;
let myMan = new Manager('bob', 45);
myMan.work();
myMan.salary = 1000;
myMan.divident = 500;
myMan.collectSalary();

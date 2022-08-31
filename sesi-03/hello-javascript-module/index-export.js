import { createBrotliCompress } from "zlib";

class Employee {
    doWork() {
        return "complete!";
    }
}
export default Employee;

////////////////////

export class Person {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

export class EmployeeOne extends Person {
    doWork() {
        return "Yes! Selesai.";
    }
}



//Apa sih modular di JS, ada banyak
//ada 3 tahap
//1. IIFF
//CommonJS
//AMD/requre.js

//multiple export


//Memanggil class Employee

import Employee from "./index-export.js";
const mark = new Employee("Mark Cubus");
console.log(mark.doWork());

import { Person, EmployeeOne } from "./index-export.js";
const fitri = new EmployeeOne("Fitri A.")
console.log(fitri.doWork());
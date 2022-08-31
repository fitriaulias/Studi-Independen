//Class

//Define class


// class Employee {
//         this._name = name; //properties 
    

//     doWork() { //method
//         return "complete!";
//     }
// }

//depannya huruf besar

//constructor

// class Employee {
//     constructor (name) {
//         this._name = name; //properties 
//     }

//     doWork() { //method
//         return "complete!";
//     }

//     getName() {
//         return this._name;
//     }
// }

// let scott = new Employee("Scott Moss"); //instance
// console.log(scott.getName());
// console.log(scott.doWork());

//modul harus diinstall npm init -y


//Class Inheritance
/**Tiga pilar utama OOP:
 * 1. encapsulation
 * 2. polymorphism
 * 3. inheritance
 */

class Person {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

class Employee extends Person {
    //Ketika class employee didefinisikan sebagai turunan person, maka seluruh method dan properties dari Person akan otomatis diwariskan kepada Employee
    doWork() {
        return this._name + " is working";
    }
    }


let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());
let scott2 = new Person("Fitri A.")
console.log(scott2.getName())


// const rendy = new Person("Rendy Augusto");
// console.log(rendy.doWork()); //error

//Method super
class EmployeeOne extends Person {
    constructor(name, title) {
        super(name);
        this._title = title;
    }

    getNameTitle() {
        console.log(this._name + ' berprofesi sebagai ' + this._title);
    }
}

let spongebob = new EmployeeOne('Spongebob Squarepants', 'Chef');
console.log(spongebob.getNameTitle());
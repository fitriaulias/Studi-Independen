//Arrow function and bind(this)
//1. Sintaks yang lebih pendek

//function declaration
//function> menyimpan kedalam sebuah variabel
function add (a, b) {
    return a + b;
}

//function expression
//konstanta: harus diinisialisasi dulu, baru bisa diambil
const addOne = function (a, b) {
    return a + b;
}
//add kalo panggil diatas expression ini error, kalo declaration mah engga.
//misal ada assignment kalkulator ini bisa dipake

//arrow function
const addTwo = (a, b) => {
    return a + b
}



//Implicit return
//hampir semua function. tugasnya apa? membuat lebih singkat dan bersih.

function addThree(a, b) {
    return a + b;
}

function squareOne(x) {
    return x * x;
}

function three() {
    return 3;
}

//Implicit returnnya arrow function
const squareTwo = x => x * x; //Two hanya penggantian nama variabel saja
const threeOne = () => 3;

//jika operasi lebih kompleks
const addFour = (a, b) => {
    const temp = a + b;
    return temp;
}

//Manajemen this keyword
//interval/looping berdasarkan durasi waktu
//bind untuk ngasih variabel, ttp pake this.
//kalo dikasih arrow ga pake bind, langsung jalan.

/**function Person() {
 *      this.age = 0;
 * 
 *      setInterval(function()) {
 *          this.age++};
 *          console.log(this.age);
 *      }, 1000);
 * }
 * 
 * const p = new Person();
 * 
 * kode diatas akan menghasilkan NaN berulang-ulang.
 */

//cara 1
function PersonOne() {
    this.ageOne = 0;

    const that = this;
    setInterval(function() {
        this.ageOne++;
        console.log(that.ageOne);
    }.bind(this), 1000);
}

const p = new PersonOne();
console.log(p);

//di js jangan membuat kode numpuk dan banyak.

//cara 2, menggunakan metode bind

function PersonTwo() {
    this.ageTwo = 0;

    setInterval(function() {
        this.ageTwo++;
        console.log(this.ageTwo);
    }.bind(this), 1000);
}
const q = new PersonTwo();
console.log(q);

//cara 3
function PersonThree() {
    this.ageThree = 0;

    setInterval(() => {
        this.ageThree++;
        console.log(this.ageThree);
    }, 1000);
}
const r = new PersonThree();
console.log(r);


//higher order function

setInterval(() => {
    console.log("TickTackToe");
}, 1000);


// setInterval(printTick, 1000);

// const printTick = () => {
//     console.log("Tick Tack Toe");
// }




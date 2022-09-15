/**ES6
 * Pendeklarasian variabel oleh let dan const.
 * Sebelumnya pendeklarasian variabel di JS menggunakan var, namun ada masalahnya. Makanya diganti oleh let untuk mendeklarasikan variabel, let bisa di assign valuenya saja, dan berfungsi di scope yang sama, jika ingin membuat variable yang read only gunakan const yaitu konstanta, variabel ini tidak bisa diubah/immutable. Let const jika ada di scope yang berbeda maka hasilnya akan berbeda juga.
 */

import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import { type } from "os";

/**Arrow function & this
 * 
 * Arrow function
 * Diidentifikasi dengan =>
 * Kelebihan arrow function:
 *1. Nulis lebih sedikit, tidak perlu kurang kurawal dan bracket, akan otomatis di return arrow function

 Sekilas tentang this: harus menyesuaikan dengan scopenya
 */

 /**Arrow function: membuat kode lebih indah, dan cepat
  * 
  */

 const hitung = function(angka1, angka2) {
    return angka1 + angka2; //cara lama
 };

//cara baru
const hitungOne = (angka1, angka2) => { //ganti function dengan arrow
    return angka1 + angka2; 
 };

 //lebih gampang dan lebih cepat. Arrow function yang disederhanakan
 const hitungTwo = (angka1, angka2) => { angka1 + angka2; //ganti function dengan arrow
 }; //hapus return

 //2 part dari syntax:
 //const hitung = ()
 // => {}

 var a = [1, 2, 3, 4, 5];
 a = a.map(v => v+2);
 console.log(a)

 //contoh lain

 var artist = "Deadsquad";

 function playGig() {
    let instrument = ["drum", "guitar"];

    console.log("Kita akan bermain musik dari" + this.artist);
 }

 playGig();


 //Kembali ke Default
 //Default parameter: nulis lebih sedikit lagi
 //Berfungsi agar function lebih fleksibel, jika tidak ada yang diparsing/missing parameter maka tidak akan error
 //Cuma butuh = untuk declare default parameter di function

 //function untuk menyapa orang

//  function greet(name, greeting) {
//     name = typeof name !== "undefined" ? name: "Students";
//     greeting = typeof greeting !== "undefined" ? greeting: "Welcome Kode";

//     return `${greeting} ${name}!`;
//  }
 //diatas adalah cara lama


 function greetOne(name = "sStudents", greeting = "Welcome Kode") {
   return `${greeting} ${name}!`;
 }

//default function dengan arrow
 let Func = (a, b = 10) => a + b; 

 Func(20); //akan didapati 20 + 10 = 30;
 Func(20, 50); //20 + 50 = 70

 //jika tidak diberi default value
 let NotWorking = (a = 10, b) => a + b;
 NotWorking(20)// akan dihasilkan NaN (Not a Number)

 //Dengan default parameter seperti ini kode yang dihasilkan akan lebih sedikit dan bersih. Ditandai dengan = di function


 //Gunakan Template
//Template literal/string literal di array helper
//Di ES6 mendeklarasikan string dengan menggunakan backtick (``)
//Fungsi template literal
//1. Ngambil raw file di html
//2. Menulis multiple line
//3. dll

//Template literal
//cara lama
var name = "Raka";
var greeting = "Hello" + name + "!";
console.log(greeting);
console.log(typeof greeting) //mengecek tipe data

//cara di ES6
var name = "Raka";
var greetingOne = `Hello ${name}!`;
console.log(greetingOne)
console.log(typeof greetingOne); //string

//Backtick juga mensupport multiple line

var text = `Selamat belajar
ES6 bersama KODE
dengan saya Raka`
console.log(text)


//interpolate string literal
function upper(s) {
   return s.toUpperCase();
}

var who = "Kode";
var textOne = `Selamat datang ${upper("teman")} 
${who}`; 

//backtick juga support scope literal
function kode(str) {
   var name = "kode";
   console.log(str);
}

function raka() {
   var name = "Raka";
   kode(`Hello from &{name}!`)
}

var name = "global";
raka();

//Yang tampil akan Hello from Raka

//Backtick bisa menampilkan raw dari string
console.log( String.raw`Hello\nWorld` );
// \n nya akan tetap dibawah

//Backtick bisa mengeluarkan length dari string
function showraw(strings, ...values) {
   console.log( string );
   console.log( string.raw );
}

String.raw`Hello\nWorld`.length; //dikonsole akan ada 12


//Spread operator dan Rest
//Mempunya simbol yang sama yaitu (...) akan ditemukan di array, membedakannya di fungsinya saja. 
//Rest: digunakan di array, dibelakangnya.
//Rest berguna sebagai gatherer atau collector, sebagai tempat menyimpan array yang tidak dideklarasikan.
//Sedangkan spread hampir sama seperti rest, spread bekerja sama dengan concat untuk menggabungkan beberapa array.

//Rest: collector atau sisanya
var [c, ...n] = [1, 2, 3, 4, 5]; // n -> [2, 3, 4, 5]
//yang diambil yang depan, yang belakang adalah rest

function foo(x,y,...z) {
   console.log(x,y,z);
}

foo( 1,2,3,4,5 ) // [3,4,5]

//spread
var params = ["Hello", true, 7];
var other = [1,2, ...params, 3];

var other = [1, 2].concat[params] //menggabungkan params dan other ditengah-tengah

var a = [2,3,4];
var b = [1, ...a, 5];
console.log(b) //hasilnya [1,2,3,4,5]


//Destructuring
//Memecahkan bagian besar dalam kode menjadi bagian yang lebih kecil, nantinya bisa digunakan untuk mendeklarasikan/assign variabel.
//Break down struktur kompleks
//Array
function printFirstAndSecondElement([first, second]) {
   console.log('Element Pertama adalah' + first + ", element kedua adalah" + second);
}

//buat function kembali untuk mengekstraksi elemen ke 2 dan 4
function printSecondandForthElement([, second, , forth]) {
   console.log('Element kedua adalah' + second + ", element keempat adalah" + forth);
}

var array = [1,2,3,4,5]
printFirstAndSecondElement();
printSecondandForthElement();

//Object
//Memecah object
function printBasicInfo({ firstName, secondName, profession}) {
   console.log(firstName + secondName + "-" + profession);
}

var person = {
   firstName: "Ardhi",
   secondName: "Raka",
   age: 33,
   children: 3,
   profession: "Kode"
}

printBasicInfo(person); //Hasilnya akan Ardhi Raka - Kode


//Bantu dengan Array
//Array helper
//1. forEach
//Cara kerja: Mengekstraksi satu per satu value array untuk diolah oleh function
//2. Map
//Cara kerja: Saat dimana punya value diawal yang nantinya diolah kemudian tersisa sesuai keinginan
//3. Filer
//Cara kerja: menyaring array untuk diluluskan setelah melewati function tertentu dan menghasilkan array baru
//4. Find
//Cara kerja: menemukan array yang sesuai kriteria, misal array yang pertama ditemukan sesuai kriteria
//5. Every dan some
//Every: semua
//Some: ada
//6. Reduce
//Cara kerja: menggabungkan semua nilai dari array sehingga menjadi array baru yaitu gabungan array awal.
//Reduce juga memproses object baru.

//Filter
var values = [1, 60, 34, 30, 20, 7];
function lessThanTwenty(val) {
   return val < 20;
}
var valueLessThanTwenty = values.filter(lessThanTwenty);
console.log(valueLessThanTwenty); //filter akan menampilkan apa yang lulus dari functionnya yaitu angka yang kurang dari 20


//Find; mencari elemen yang lulus tetapi hanya yang pertama
var people = [
   {name : "Raka", age : 50},
   {name : "Edi", age : 9},
   {name : "Putra", age : 40},
   {name : "Astrid", age : 19},
   {name : "Adhy", age : 16}
]

function teenager(person) {
   return person.age > 10 && person.age < 20;
}

var firstTeenager = people.find(teenager);
console.log('Beli yang ditemukan adalah:', firstTeenager);


//every: mengecek semua array
var peopleOne = [
   {name : "Raka", age : 50},
   {name : "Edi", age : 9},
   {name : "Putra", age : 40},
   {name : "Astrid", age : 19},
   {name : "Adhy", age : 16}
]

function teenagerOne(person) {
   return person.age > 100 && person.age < 20;
}
var firstTeenagerOne = peopleOne.every(teenagerOne);
console.log("Semua yang ada di array adalah beli", firstTeenagerOne) //false, karena tidak semua variabel di people itu belia


//Some: mencari beberapa apakah pass function atau tidak, sama seperti every, some akan mereturn true dan false, menggunakan contoh sebelumnya di peopleOne maka hasilnya akan menunjukkan some


//forEach
var colors = ["red", "green", "blue"];
function print(val) {
   console.log(val);
}

colors.forEach(print); //passing array menjadi argument. Hasilnya red, green, blue


//Map
var colorsOne = ["white", "black", "blue", "pink"];
function kapital(val) {
   return val.toUpperCase();
}
var warnaKapital = colors.map(kapital);
console.log(warnaKapital); // hasilnya bentuknya masih array tapi hasilnya sudah kapital


//Reduce
let foods = [800, 200, 100, 300];
let total = foods.reduce(function(sum, item){
   return sum + item;
})

console.log(total) //1400


//Pengorganisasian ES6

//Module
//Export & Import
//Export: 
//Cara menggunakan export: disimpan di depan deklarasi
export function foo() {
   //....
}

export var kode = 42;
var bar = [1,2,3];
export { bar };

//Cara lain: menulis langsung 1 deklarasi
export { foo, kode, bar };
//export juga bisa direname
export { foo as kode }

var kode = 42;
export {kode};
kode = 100 //nilai baru akan menggantikan 42


//Import, menggunakan module dari tempat lain
//Cara penggunaan: mendeklarasikan di awal melalui nama spesifiknya
import { foo, kode, bar } from 'foo';
//rename
import { foo as theFooFunc} from 'foo';
theFooFunc();
//Jika ingin mengimport semua fungsi di 1 modul
export function bar() { //...
}
export var x = 42
export function baz() { //...
}

import * as foo from 'foo';
foo.bar();
foo.x;
foo.baz();


//Classes
//Cara pendeklarasian

class Person { 
   constructor() {
      this.name = "Person";
      this.height = 150;
   }

   sayName() {
      console.log(this.name)
   }
}

//class bisa ditulis sebagai expression
var person = class person {
   
}

//class juga bisa diberi subclass (child), tinggal gunakan keyword extends

class Developer extends Person {
   constructor(name, height) {
      super(name, height);
      this.name = "Developer"
   }
}

var Kode = new Developer();
Kode.sayName(); //Hasilnya Developer


//Tambahan API Edition

//Array
//Ada banyak macam untuk mengolah array selain menggunakan array helper
//1. Array.of
//2. Array.from: mengambil value dari array diatasnya
//3. CopyWithin: mengkopi beberapa array dan menaruh di tempat yang sudah didefinisikan
//4. Fill: mengisi array
//5. Find: mencari yang ada di array
//6. Keys: mengeluarkan index array
//7. Entries: mengeluarkan value beserta index array


//Object
//1. Object.is: lebih strict daripada ---, sama-sama mengkomparasi value yang dibuat
//2. Object.setPrototypeOf
//3. getonpropertysymbol

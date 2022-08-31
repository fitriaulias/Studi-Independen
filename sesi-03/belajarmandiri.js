//Object pada javascript
/**Object literal
 * Function declaration
 * Contructor function (keyword new)
 * Object.create
 */

//Object Literal
// let mahasiswa = {
//     nama: 'Sandhika',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.name}, selamat makan!`);
//     }
// }

//method: function yang ada di dalam object

//2. Function Declaration

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Sandhika', 10);
// let doddy = Mahasiswa('Doddy', 20);

//Kalo pake function declaration harus return objectnya

//Contructor function: tidak perlu mendeklarasikan variabel dan return
//keyword new

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

}

let sandhika = new Mahasiswa('Sandhika', 10)
//kenapa pake new? biar ga dikira nginisiasi variabel baru

//Template literal: string literal yang memungkinkan adanya expression di dalamnya, hanya bisa dibuat oleh back tick
/**1. Menggunakan ``back tick
 * 2. multi-line string
 * 3. embedded expression
 * 4. HTML Fragments
 * 5. Expression interpolaritaion
 * 
 */

//destructuring assignment

// const perkenalan = ['Halo', 'nama', 'saya', 'Fitri'];
// // const [a, b, c, d] = perkenalan;
// //kalo mau dilompat
// const [a, , , b] = perkenalan;
// console.log(a);
// console.log(b);

//swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b); 

//Asynchronous
//Callbacks: Function yang dikirimkan sebagai parameter pada function yang lain, function yg dieksekusi setelah function lain dikerjakan

//Synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

//Asynchronous callback
//request asynchronous menggunakan ajax

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if(xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if( x.status === 404 ) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('mulai'); //buatngecek
// getDataMahasiswa('data/mahasiswa.json', (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

//kalo pake JQuery

// const movies = fetch('')
//     .then(response => response.json())
//     .then(response => console.log(response));

// //fetch mengembalikan promise

//Promise: object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
//janji: terpenuhi/ingkar
//states (fulfilled/rejected/pending)
//callback (resolve: ketika janji terpenuhi/reject: janji tidak terpenuhi/finally:waktu tunggu selesai, baik terpenuhi atau tidak terpenuhi 
//aksi (then: jike terpenuhi / catch: janji tidak terpenuhi)

//contoh1
 let ditepati = false;
 const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Ingkar janji..');
    }
 });

 janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! ' + response));

//contoh 2
let ditepatiNih = true;
 const janji2 = new Promise((resolve, reject) => {
    if (ditepatiNih) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa waktu!')
        }, 2000);
    }
  }) ;

  console.log('Mulai');
  janji2
  .finally(() => console.log('selesai menunggu!'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! ' + response));
console.log('selesai');

//Promise.all()
//Jika punya promise banyak dan ingin dijalankan sekaligus


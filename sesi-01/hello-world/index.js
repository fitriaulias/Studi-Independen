//Variable Declaration

/**Variabel:
 * 1. let: dapat diubah
 * 2. const: immutable/tidak bisa diubah
 * 3. var: jadul, ada proses hoisting
 */

//Cara mendeklarasikan variabel
let score = 50;

//Deklarasi dengan let
let playerName = "Budi";
alert(playerName);
playerName = "Andy";
alert(playerName);
//Petik 1 (') atau 2 ("") ga masalah, asal konsisten
//Dalam let jika mendeklarasikan untuk kedua kalinya atau lebih tidak perlu menggunakan let

//Deklarasi dengan const
//const: konstanta/bersifat konstan/immutable/tidak dapat diubah nilai variabelnya

const pi = 3.14;

//Dalam memberi nama variabel jangan gunakan istilah yang sudah ada di bahasa programming contoh: let
// let let = 0; --> Contoh yang salah

/**Aturan penamaan variabel:
 * 1. Tidak menggunaka istilah umum di bahasa pemrograman
 * 2. Tidak menggunakan angka di depan
 * 3. Hanya boleh ada angka, huruf, underscore, tanda dolar, garis bawah
 */

/**Mengenal tipe data:
 * 1. Number: 1 2 3 4
 * 2. String: "hello"
 * 3. Boolean: true, false
 * 
 */

//Tiper data number
let weight = 75;
alert(weight + 15);

//Penjumlahan
let originalNum = 23;
let numberToBeAdded = 7;
let newNum = originalNum + numberToBeAdded;
alert(newNum);

//Tipe data string
alert("Hello class Modern JavaScript!");
//gunakan single atau double quote, yang penting konsisten
let message = 'Welcome!';
alert(message);
message = 'Bye, bye';
alert(message);

//menggunakan escape character untuk petik 1 dalam string
message = "She's a great person";
message = 'She\'s a great person';
alert(message);

let htmlSnippet = '<h1 class="header">This is a header</h1>';

//Manipulasi string
//Menggabungkan string

let visitor = prompt('Siapakah namamu?');

let message1 = 'Halo ' + visitor;
message1 = message1 + '.Selamat datang di kelas Modern JavaScript!';
message1 += 'Kita senang sekali kamu mau datang berkunjung, ';
message1 += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';
alert(message1);

//Jika string dan angka ditambah hasilnya NaN: Not a Number

//Tipe data boolean
//Hanya memiliki dua nilai yaitu true dan false, jika true dan falsenya diapit quote maka sudah jadi string
let isRaining = true
let isFinished = true

let menuOpen ='true'

//Arrays

/**Arrays: tipe data yang di dalamnya terdapat tipe data lainnya.
 * - Posisi sangat penting, paling kiri artinya paling depan, paling kanan artinya paling belakang
 * - Posisi array biasa disebut index, dimulai dari 0
 * - Menambah elemen ke array gunakan operator "PUSH"
 * - Menghapus elemen array gunakan operator "POP"; yang dibuang yang paling belakang
 * - tipe data bisa campur, lebih baik sama.
 */

//Deklarasi array
var kode = ["React", "Php", "Ruby"];
let kode1 = ["React", "Php", "Ruby"];
const kode2 = ["React", "Php", "Ruby"];

//Operasi Array, ada 3 metode operasional Array yang penting

//Merge 2 array
//Gunakan push.apply untuk menggabungkan 2 array.

var fruits = ['anggur', 'melati', 'apel', 'jeruk']
var index_yang_ingin_dihapus = 1; //fruits[1] = melati, jadi melati akan dihapus dari array buah-buahan
fruits.splice(index_yang_ingin_dihapus, 1)
//hasilnya akan menunjukkan fruits = ['anggur', 'apel', 'jeruk']

//Mengosongkan array
//Cara pertama:
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
fruits = [] //--->akan membuat kehilangan referensi
//Cara kedua:
var fruits1 = ['anggur', 'melati', 'apel', 'jeruk'];
fruits1.splice(0, fruits.length)
//fruits -> []


//Array Multidimensi: array dalam array
let usiaKucingku = [
    ["Elang", 5],
    ["Thor", 3],
    ["Loki", 3],
    ["Gembul", 2],
    ["Bubu", 1],
    ["Ncit", 1]
]
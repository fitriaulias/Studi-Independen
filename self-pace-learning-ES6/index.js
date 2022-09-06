/**ES6
 * Pendeklarasian variabel oleh let dan const.
 * Sebelumnya pendeklarasian variabel di JS menggunakan var, namun ada masalahnya. Makanya diganti oleh let untuk mendeklarasikan variabel, let bisa di assign valuenya saja, dan berfungsi di scope yang sama, jika ingin membuat variable yang read only gunakan const yaitu konstanta, variabel ini tidak bisa diubah/immutable. Let const jika ada di scope yang berbeda maka hasilnya akan berbeda juga.
 */

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

 function greet(name, greeting) {
    name = typeof name !== "undefined" ? name: "Students";
    greeting = typeof greeting !== "undefined" ? greeting: "Welcome Kode";

    return `${greeting} ${name}!`;
 }
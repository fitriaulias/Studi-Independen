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
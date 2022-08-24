// Dibiasakan pake let
// Kenapa mesti pake Javascript? Karena populer.
// Javascript adalah bahasa pemrograman yang dipake di browser.
//Javascript darimana sih?
//Melihat javascript di console klik inspect dan JS.
//Nanti akan membuat aplikasi mobile (responsive)
//Yang akan dipelajari ES6
//Standar penulisannya kaya formater (?)
//Javascript adalah bagian dari implementasinya.
//Kita bisa nulis untuk menggunakan titik koma, dan tanpa itu. Itu tergantung kebutuhan. ES6 gapapa ga pake semicolon, yang penting harus konsisten. Umumnya 
//Harus punya basic. 
//Variabel bisa dibayangin sebagai sebuah kotak/wadah yang ingin diisi mainan. Kalau sudah ada mainan, tidak boleh ada benda lain yang masuk. Kalo mau masukin harus keluarin dulu mainannya. Kalo udah masukin mainan boleh bebas masukin mainan apa aja.
//Pastikan nama mainan tadi sesuai.
//Jadi kalau data udah dimasukin, kita tidak boleh memasukkan data lain.
//Variabel: let dan const, perbedaannya?
//var; udah lama, jadul, global


//Yang bikin berpengaruh itu scopenya. Kalo var manggilnya pake cara lama dan sudah ga disupport

var nama = "Arif"

function scopeName() {
    nama = "Arif"
}

scopeName()
console.log(nama);

//Kalo pake let ga perlu mendefinisikan dari function sampai scopeName

// ----------
x = "Test"
let x
console.log(x);

//-----

let score = 50
console.log("Hasil variabel score"+score)

let playerName = "Budi"
console.log("Hasil variabel playerName " +playerName);
//alert(playerName)
playerName = "Andy"
console.log("Halo playerName " + playerName)
//alert(playerName)

//Kalo pake console ga bakal tampil, karena itu adalah dialog

//nodemon (?) cari tahu


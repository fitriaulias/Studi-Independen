class Hewan {
    constructor(nama, umur) {
        //membuat properti
        this.nama = nama;
        this.umur = umur;
    }
    
    kenalan() { //ini method
        console.log("Hello")
    }

    info() {
        console.log('Nama saya adalah ${this.nama}');
        console.log('Umur ${this.umur} tahun');
    }
}

// const hewan1 = new Hewan("Bugha", 2);
// console.log(hewan1.nama);

const hewan2 = new Hewan("Bugha", 2);
console.log(hewan2.nama);
console.log(hewan2.umur);
hewan2.kenalan();
hewan2.info();

// const hewan3 = new Hewan();

//constructor digunakan untuk memberikan nilai awal ke objek atau instance baru

//selain membuat properti, bisa juga membuat method (ibaratkan hewannya bisa apa, aksinya bisa apa)
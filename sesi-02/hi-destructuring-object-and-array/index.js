//Destructuring Object

/**Object: 
 * - Struktur data seperti array
 * - Digunakan untuk mengumpulkan berbagai data
 * - Tipe data sesuai kebutuhan, menggunakan key/property
 * - Ada function yang bisa disimpan sebagai nilai dari propertynya object
 */

//Object juga nampung data, dengan key dan property.
//Misal: punya banyak laptop, ada banyak jenis dan warna. Bagaimana buat objek sampel.

//Object dengan function expression
/**
 * Destrukturing objek: mecah belah/bagi-bagi.
 * Ini yang akan memecah hasil dari object tadi.
 */

 const user = {};
 user.name ='Adi Nugroho';
 user.handle = '@adinugroho';
 user.location = 'Jakarta, Indonesia';
 
 //extraction
 const name = user.name;
 const handle = user.handle;
 const location = user.location;
 console.log(name, handle);

//destructing

const userDua = {
    nameDua: 'Harry Potter',
    handleDua: '@harrypotter',
    locationDua: 'Privet Drive, Little Whinging'
};

//extraction
const { nameDua, handleDua, locationDUa } = userDua;
console.log(name, handle, location);


//Destructuring function result
const getUser = () => {
    return {
        nameTiga: 'Hermione Granger',
        handleTiga: '@hermionegranger',
        locationTiga: 'Heathgate, London'
    };
}

//extraction
const { nameTiga, handleTiga, locationTiga } = getUser();
console.log(nameTiga, handleTiga, locationTiga);

//Kesimpulan
//1. destructur: mudah untuk mengekstrak data dalam bentuk struktur yang baik, object yang baik
//array hanya mengambil return yang ada di object tadi, jadi hasilnya object yang dia buat. Urutannya paling awal object, diapit array


//Destructuring Array
const csv = "1997, Ford, F350, Must Sell!";
const [ year, make, model, description ] = csv.split(",");

//Aliasing Object Properties
const userEmpat = {
    n: 'Ron Weasley',
    h: '@ronweasley',
    l: 'The Burrow'
};

//Extraction
const { n: name2, h: handle2, l: location2 } = userEmpat;
console.log(name2, handle2, location2);

//This
//Kombinasi dengan html
//This dianggap window
//this digunakan untuk mendeklarasi public properties
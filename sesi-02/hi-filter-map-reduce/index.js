//Filter

const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"},
];

//Ingin mendapatkan spesies ikan
//Cara konvensional (for loop)

let fish = [];
for(let i = 0; i < animals.length; i++) {
    if (animals[i].species === 'fish') {
        fish.push(animals[i]);
    }
}
console.log(fish);

//menggunakan filter
let cat = animals.filter((animal) => animal.species === 'cat')
console.log(cat);


//Map
const commanders = [
    {name: "ALexander Nevsky", type: "cavalry"},
    {name: "Scipio", type: "infantry"},
    {name: "Boudica Prime", type: "archer"},
    {name: "Pakal", type: "infantry"},
    {name: "Xiang Yu", type: "cavalry"},
    {name: "Henry", type: "archer"}
];

//Ingin mendapatkan nama tanpa tipe
//cara for loop
let names = [];
for(let i = 0; i < commanders.length; i++) {
    names.push(commanders[i].name);
}

console.log(names);

//map method
let namesOne = commanders.map((commander) => commander.name);
console.log(namesOne)

//next example
let namesTwo = commanders.map((commander) => commander.name + " tipenya adalah " + commander.type);

console.log(namesTwo);


//Reduce
//Mempunyai tugas yang lebih umum dan generik
//Bisa buat filter dan map

let orders = [
    { total: 325 },
    { total: 512 },
    { total: 128 },
    { total: 32 },
];

//Cara konvensional, for loop
let total = 0;
for (let i = 0; i < orders.length; i++) {
    total = total + orders[i].total;
}
console.log(total);

//Cara reduce
//Punya 2 parameter
//1. menghasilkan nilai (return), untuk diiterasi
//2. nilai awal yang digunakan seperti let total = 0

let totalOne = orders.reduce((total, order) => total + order.total, 0);
console.log(total);
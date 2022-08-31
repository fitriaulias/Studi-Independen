const arrayOfWords = ['cucumber', 'tometoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];
// let arrayMap = arrayOfWords.map((arrayWordsOne) => arrayWordsOne.toUpperCase());
// let complicatedMap = complicatedArray.map((complicatedOne) => complicatedOne.toUpperCase());

//Membuat nilai array menjadi huruf kapital

function makeAllCaps(input) {
    return new Promise((resolve, reject) => {
        resolve(input.map((cobaOne) => cobaOne.toString().toUpperCase())); //merubah array menjadi kapital dengan menggunakab map, diubah dulu ke string baru ke ganti ke kapital semuanya
    });
};

function sortWords(input) {
    return new Promise((resolve, reject) => {
        resolve(input.sort()) //sortir array
    })
};


let result = makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch((error) => console.log(error))

let resultTwo = makeAllCaps(complicatedArray)
.then(sortWords)
.then((resultTwo) => console.log(resultTwo))
.catch((errorTwo) => console.log(errorTwo))

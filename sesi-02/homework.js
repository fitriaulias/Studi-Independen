const VideoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {consevartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {consevartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {consevartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservartory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
]

//Lakukan filter terhadap data dibawah yang memiliki present = true. Kemudian cetak berapa banyak hasilnya dan cetak hasilnya dengan console.log

//yang memiliki present = true
let presentTrueOne = VideoData.filter((videodata) => videodata.present === true);
console.log(presentTrueOne);

//room dengan present = true
let presentTrueRooms = VideoData.filter((videodata) => videodata.present === true).map((videoData) => videoData.rooms);
console.log(presentTrueRooms);


//Tanggal 1/9/2022

const dataFilter = presentTrueOne.map((data) => {
    let name = data.name.toString();
    let present = data.present.toString();
    let rooms = data.rooms;

    let roomsObject = { //karena menginisialisasi data baru
        nama: name,
        present: present,
        rooms: rooms,
    }
    console.log(roomsObject);
});

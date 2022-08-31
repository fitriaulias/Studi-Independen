import fetch from 'node-fetch';
// fetch('https://fake-tweets-api.herokuapp.com/posts')
// .then(response => response.json())
// .then(tweets => console.log(tweets))
// // .then(tweets => tweets.filter(tweet => tweets.stars > 50))
// // .then(tweets => tweets.filter(tweet => tweets.stars > 50))
// .catch(err => {console.error('error')});

//Dengan async/await sudah dapat menjalankan kode sync diatas dengan gaya sync
//asyn/await sudah kompatibel dengan promise
//async/await hanya berjalan di dalam fungsi karena kita hrus menandai mana fungsi yang akan dijalankan kode async mana fungsi biasa

//bungkus kode yang tidak didalam fungsi menjadi fungsi
// const fetchTweets = async () => {
//     const response = await fetch('https://fake-tweets-api.herokuapp.com/posts');
//     const tweetsOne = await response.json();
//     let tweets = console.log(tweetsOne);
// // .then(tweets => tweets.filter(tweet => tweets.stars > 50))
// // .then(tweets => tweets.filter(tweet => tweets.stars > 50))
// }

// fetchTweets();

//IIFE (Immediately Invoked Function Expression)
(async () => {
    const response = await fetch('https://fake-tweets-api.herokuapp.com/posts');
    const tweetsOne = await response.json();
    // let tweets = console.log(tweetsOne);
    console.log(tweetsOne.length);
// .then(tweets => tweets.filter(tweet => tweets.stars > 50))
// .then(tweets => tweets.filter(tweet => tweets.stars > 50))
})
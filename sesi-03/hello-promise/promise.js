import fetch from 'node-fetch';
fetch('https://fake-tweets-api.herokuapp.com/posts')
    // .then(response => response.json())
    // /*.then(tweets => {
    //     return tweets.filter(tweet => {
    //         return tweet.stars > 50;
    //     })
    // }).then(tweets => {
    //     return tweets.filter (tweet => {
    //         return tweets.rts > 50;*/
    //     //.then(tweets => console.log(tweets))
    //     .catch(err => {
    //         console.error(error)
    // })
    .then(response => response.json())
    .then(tweets => console.log(tweets))
    // .then(tweets => tweets.filter(tweet => tweet.rts > 50))
    // .then(tweets => {
    //     let sizeTweet = tweets.length
    //     console.log("Panjang data = " sizeTweet + "\n" + tweets)
    //     console.log(tweets)
    // })
    .catch(err => {
        console.error('error');
    });


//     //New Promise

//     const doSomething = function() {
//         return new Promise((resolve, reject) => {
//             /*TODO: try to do something asycn and resolver or reject according to operation result
//              */
//         })
//     };

//     //call doSomething and receive a Promise as return
//     let doIt = doSomething()

//     //wait for the promise to get resolved
//     doIt.then(response => {

//     })

//     //.. or to get rejected
//     doIt.catch(error => {

//     })

// const setTimeoutPromise = (duration) =>
//     new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     })

// setTimeoutPromise(1000).then(() => console.log("tick"));


//Async/await
// const fetchTweets = async () => {

// const response = await
// fetch('https://github.com/lionhard83/fake-tweets-api');
// const tweets = await response.json();
// let tweets = tweets.filter(tweet => tweet.stars > 50);
// tweets = tweets.filter(tweet => tweets.rts > 50);
// console.log(tweets);

// }

// fetchTweets();

// (async () => {
//     const response = await
//     fetch("https://github.com/lionhard83/fake-tweets-api");
//     let tweets = await response.json();
//     let tweets = tweets.filter(tweet => tweet.stars > 50);
//     tweets = tweets.filter(tweet => tweet.rts > 50);
//     console.log(tweets.length);
// })();


//meeting
//promise: mengelola data
//nanti dioilah di react/react native
//New Promise

    // const doSomething = function() {
    //     return new Promise((resolve, reject) => {
    //         /*TODO: try to do something asycn and resolver or reject according to operation result
    //          */
    //     })
    // };

    // //call doSomething and receive a Promise as return
    // let doIt = doSomething()

    // //wait for the promise to get resolved
    // doIt.then(response => {
    //     console.log('Ok bisa!' + response)
    // })

    // //.. or to get rejected
    // doIt.catch(error => {
    //     console.log('Ga bisa' + error)
        
    // })

    //settimeout yang dibungkus promise
const setTimeoutPromise = (duration) =>
    new Promise((resolve, reject) => {setTimeout(resolve, duration);});
    
setTimeoutPromise(1000).then(() => console.log("Tick")); //ditepati


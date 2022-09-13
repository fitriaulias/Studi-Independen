import React, { useState, useEffect } from "react";

// class Counter extends React.Component{
//     constructor() {
//         super()
//         this.state = {
//             counter: 0
//         }
//     }

//     increment = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     decrement = () => {
//         this.setState({
//             counter: this.state.counter - 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>{this.state.counter}</h3>
//                 <br />
//                 <button className="" onClick={this.increment}>+</button>
//                 <button className="" onClick={this.decrement}>-</button>
//                 </div>
//         )
//     }
// }

function Counter() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        //Memperbarui judul dokumen
        document.title = `You clicked ${count} times`;
    });

    return (
        <>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me + </button>
        <button onClick={() => setCount(count - 1)}>Click Me - </button>
        </>
    )
}

export default Counter;
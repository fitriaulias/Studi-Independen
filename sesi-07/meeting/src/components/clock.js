import React, { useState } from 'react';

// class RealtimeClock extends React.Component {
//     constructor(props) {
//         super(props) //maksa parent component
//         this.state = { //punya object yaitu Date dengan data terbaru
//             date: new Date()
//         }
//     }

//     tick() {
//         this.setState({ //setternya
//             date: new Date() //objectnya
//         })
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => 
//         this.tick(), 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }


function Clock() {
    const [ date, setDate ] = useState(new Date());

    function tick() {
        setDate(new Date())
    }

    setInterval(() => tick(), 1000)

    //ditampilin
    return (
        <div className='App'>
            <h1>Realtime CLOCK</h1>
            <hr />
            <h1>{date.toLocaleDateString()}</h1>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
    
}

export default Clock;
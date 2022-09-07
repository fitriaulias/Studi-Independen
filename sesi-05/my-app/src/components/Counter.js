import React from "react";
import { Button } from "bootstrap";

class Counter extends React.Component{
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <br />
                <button className="" onClick={this.increment}>+</button>
                <button className="" onClick={this.decrement}>-</button>
                </div>
        )
    }
}

export default Counter;
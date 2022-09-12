import React from 'react';

//Contoh komponen menggunakan stateful component
export default class UserTwo extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'user01'
        }
    }

    render() {
        return (
            <h1>{this.state.username}</h1>
        )
    }
}
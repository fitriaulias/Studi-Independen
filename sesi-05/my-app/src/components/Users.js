import React from "react";

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'user001',
            password: '12345'
        }
    }

    getUsername() {
        return this.state.username
    }

    getPass() {
        return this.state.password
    }

    //create function > change button

    setUsername = () => {
        this.setState({
            username: "user888",
            password: "11111"
        })
    }

    render() {
        return (
            <>
            <div className="text-center">
            <h1>Belajar State</h1>
            {/**Step one get this.state */}
            </div>
            <div className="row">
                <div className="col">Username : {this.state.username}</div>
                <div className="col">Password : {this.state.password}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col">Username : {this.state.username}</div>
                <div className="col">Password : {this.state.password}</div>
            </div>
            <div className="row">
                <div className="col">Username : {this.state.username}</div>
                <div className="col">Password : {this.state.password}</div>
            </div>
            <div className="row">
                <div className="col"> 
                Lihat perubahan set data &gt; Username : {this.getUsername()}</div>
                <div className="col">
                Lihat perubahan set data &gt; Password : {this.getPass()}</div>
            </div>

            </>
        )
        
    }
}

export default Users
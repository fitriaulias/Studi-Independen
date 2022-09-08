import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user001",
      password: "12345",
    };
  }

  //create function > return username
  getUsername() {
    return this.state.username;
  }

  getPass() {
    return this.state.password;
  }

  //create function > change button

  setUsername = () => {
    this.setState({
      username: "user888",
      password: "11111",
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <h1>Belajar State</h1>
        </div>
        {/**Step one get this.state */}
        {/* <div className="row">
                <div className="col">Username : {this.state.username}</div>
                <div className="col">Password : {this.state.password}</div>
            </div> */}
        <hr />
        {/* Step two return getusername this.state */}
        {/* <div className="row">
                <div className="col">Username : {this.getUsername()}</div>
                <div className="col">Password : {this.getPass()}</div>
            </div> */}
        {/* Step three: set data baru state */}
        <div className="row">
          <div className="col">
            Lihat perubahan set data &gt; Username : {this.getUsername()}
          </div>
          <div className="col">
            Lihat perubahan set data &gt; Password : {this.getPass()}
          </div>
          <div>
            <button onClick={this.setUsername}>Button</button>
          </div>
        </div>
      </>
    );
  }
}

export default Users;

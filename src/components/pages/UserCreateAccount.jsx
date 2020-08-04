import React from "react";

class UserCreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    document.title = "Ekommart | Create an account";
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <>
        <div className="create-an-account">
          <div className="container">
            <form id="create-account-form" autoComplete="off">
              <label htmlFor="fullname">
                <b>Display Name</b>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="psw"
                id="psw"
                value={displayName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                value={password}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="psw-repeat">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                value={confirmPassword}
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="registerbtn">
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UserCreateAccount;

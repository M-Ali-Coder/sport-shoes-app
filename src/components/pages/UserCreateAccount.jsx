import React from "react";
import { auth, createUserProfileDoc } from "../../firebase/firebase.util";

class UserCreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };
  }

  componentDidMount() {
    document.title = "Ekommart | Create an account";
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // check if password and confirm passwrod is same
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("Error when creating user with Email and Password", error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword, phone } = this.state;

    return (
      <>
        <div className="create-an-account">
          <div className="container">
            <form id="create-account-form" autoComplete="off">
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

              <label htmlFor="fullname">
                <b>Full Name</b>
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
                <b>Repeat Password</b>
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

              <label htmlFor="phone">
                <b>Phone</b>
              </label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
                value={phone}
                onChange={this.handleChange}
              />

              <button type="submit" className="registerbtn">
                Submit Payment
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UserCreateAccount;

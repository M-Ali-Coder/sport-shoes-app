import React from "react";
import { Link } from "react-router-dom";
import { auth, createUserProfileDoc } from "../../firebase/firebase.util";

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
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <>
        <div className="create-an-account">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="input-field">
              <input
                type="text"
                id="fname"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="fname">Display Name:</label>
            </div>
            <div className="input-field">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="email">Email:</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="password">Password:</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password:</label>
            </div>

            <button type="submit" className="submit-btn">
              Sign up
            </button>
          </form>
          <Link to="/user/signin" className="create-acccount">
            Or Sign in
          </Link>
        </div>
      </>
    );
  }
}

export default UserCreateAccount;

import React from "react";
import { Link } from "react-router-dom";

const UserCreateAccount = () => {
  return (
    <>
      <form className="create-acccount-form">
        <h4>Create an account</h4>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="username" id="username" required />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="password" placeholder="Enter Email" name="email" id="email" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

        <div className="container signin">
          <p>
            Already have an account? <Link to="/sign-in">Sign in</Link>.
          </p>
        </div>
      </form>
    </>
  );
};

export default UserCreateAccount;

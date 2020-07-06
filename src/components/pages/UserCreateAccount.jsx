import React from "react";
import { Link } from "react-router-dom";

const UserCreateAccount = () => {
  return (
    <>
      <div className="create-an-account">
        <form>
          <div className="input-field">
            <input type="text" id="email" required />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" required />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="input-field">
            <input type="confirmPassword" id="confirmPassword" required />
            <label htmlFor="confirmPassword">Confirm Password:</label>
          </div>
          <div className="input-field">
            <input type="text" id="fname" required />
            <label htmlFor="fname">First Name:</label>
          </div>
          <div className="input-field">
            <input type="text" id="lname" required />
            <label htmlFor="lname">Last Name:</label>
          </div>
          <div className="submit-btn">Sign in</div>
        </form>
        <Link to="/user/signin" className="create-acccount">
          Or Sign in
        </Link>
      </div>
    </>
  );
};

export default UserCreateAccount;

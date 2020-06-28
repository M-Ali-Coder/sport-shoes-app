import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <div className="container user-account-page-wrapper">
      <div className="other-methods-to-sign">
        <button className="sign-in-with-google">
          <div className="icon-wrapper">
            <FcGoogle />
          </div>
          <span>Sign in with Google</span>
        </button>
        <button className="sign-in-with-facebook">
          <div className="icon-wrapper">
            <FaFacebookF />
          </div>
          <span>Sign in with Facebook</span>
        </button>
        <button className="sign-in-with-twitter">
          <div className="icon-wrapper">
            <FaTwitter />
          </div>
          <span>Sign in with Twitter</span>
        </button>
      </div>
      <div className="vertiacal-sperator"></div>
      <div className="sign-in-form">
        <form>
          <div className="input-field">
            <input type="text" id="email" required />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-field">
            <input type="text" id="name" required />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="submit-btn">Sign in</div>
        </form>
        <Link to="/create-account" className="create-acccount">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default UserAccount;

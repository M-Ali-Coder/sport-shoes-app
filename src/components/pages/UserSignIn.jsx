import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook } from "../../firebase/firebase.util";

const UserSignIn = () => {
  return (
    <>
      <div className="container user-account-page-wrapper">
        <div className="other-methods-to-sign">
          <div className="sign-in-with-google" onClick={signInWithGoogle}>
            <div className="icon-wrapper">
              <FaGoogle />
            </div>
            <span>Sign in with Google</span>
          </div>
          <div type="button" className="sign-in-with-facebook" onClick={signInWithFacebook}>
            <div className="icon-wrapper">
              <FaFacebookF />
            </div>
            <span>Sign in with Facebook</span>
          </div>
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
          <Link to="/user/create-account" className="create-acccount">
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase.util";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";

const UserSignIn = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <div className="already-signed-in">
          <h1>
            You have been already signed in, <span onClick={() => auth.signOut()}>Signout</span>
          </h1>
          <Link to="/">Go To Home Page</Link>
        </div>
      ) : (
        <div className="container user-account-page-wrapper">
          <div className="other-methods-to-sign">
            <button className="sign-in-with-google" onClick={signInWithGoogle}>
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
            <Link to="/user/create-account" className="create-acccount">
              Create Account
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UserSignIn);

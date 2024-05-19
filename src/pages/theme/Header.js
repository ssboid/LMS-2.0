import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LMB from "../../assets/brand/LMB.png";

const Header = () => {
  const navigate = useNavigate();
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  const showSignupOverlay = () => {
    setIsSignupVisible(true);
  };

  const hideSignupOverlay = () => {
    setIsSignupVisible(false);
  };

  const showLoginOverlay = () => {
    setIsLoginVisible(true);
  };

  const hideLoginOverlay = () => {
    setIsLoginVisible(false);
  };

  return (
    <div>
      <div className="pagehead" id="pagehead">
        <div className="header">
          <div className="one">
            <Link to="/" className="link">
              <ul>
                <li>
                  <img src={LMB} id="logo" alt="Logo" />
                </li>
                <li id="name">
                  LIBRI
                  <br />
                  <span id="mahiti">MAHITI</span>
                </li>
              </ul>
            </Link>
          </div>
          <div className="two">
            <ul>
              <div className="twoset">
                <Link to="/browse" className="link">
                  <li className="browselink browse">
                    <span>BROWSE</span>
                  </li>
                </Link>
                <li>
                  <form>
                    <input
                      type="search"
                      name="query"
                      className="search"
                      placeholder="Search..."
                    />
                    <Link to="/search" className="link">
                      <button type="" className="search_button">
                        <i className="sear fas fa-search sear"></i>
                      </button>
                    </Link>
                  </form>
                </li>
              </div>
              <div className="toshow">
                <li
                  id="signupsignup"
                  className="headlink"
                  onClick={showSignupOverlay}
                >
                  SIGN UP
                </li>
                <li
                  className="headlink"
                  id="loginlogin"
                  onClick={showLoginOverlay}
                >
                  LOGIN
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {isSignupVisible && (
        <div
          className="container"
          id="signupoverlay"
          style={{ display: "block" }}
        >
          <div className="card" id="registercard">
            <br />
            <form action="user?page=register" method="post">
              <a className="signup">SIGN UP</a>
              <div className="inputBox1">
                <input type="text" name="email" required="required" />
                <span className="user">Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="username" required="required" />
                <span>Username</span>
              </div>
              <div className="inputBox">
                <input type="password" name="password" required="required" />
                <span>Password</span>
              </div>
              <button className="enter">Sign In</button>
            </form>
          </div>
          <div id="shadowlayerr" onClick={hideSignupOverlay}></div>
        </div>
      )}

      {isLoginVisible && (
        <div
          className="container"
          id="loginoverlay"
          style={{ display: "block" }}
        >
          <div className="card" id="logincard">
            <a className="login">Log in</a>
            <form action="user?page=login" method="post">
              <div className="inputBox">
                <input type="text" name="email" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="password" name="password" required="required" />
                <span>Password</span>
              </div>
              <button className="enter">Login</button>
            </form>
          </div>
          <div id="shadowlayerl" onClick={hideLoginOverlay}></div>
        </div>
      )}
    </div>
  );
};

export default Header;

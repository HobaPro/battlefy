import "./index.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import email from "../../assets/icons/email.png";
import password from "../../assets/icons/unlock.png";
import jwt_decode from "jwt-decode";

const Login = () => {
  //Email regular expression
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
  let url = "http://localhost:5000/api/login";


  const navigate = useNavigate();
  const [usermail, setMail] = useState("");
  const [passwords, setPasswords] = useState("");

  const [formErr, setFormErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const [login, setLogin] = useState({});




//Google auth
  function handleCallBackResponse(response) {
    var userobject = jwt_decode(response.credential);

    

 
    fetshData(url,{
      email: userobject.email,
      password: userobject.sub 
    });
  }
  const google = window.google;
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "676011624172-82o65kfdgn32cgc98bjp1odf04k2urv7.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      type: "standard ",
      theme: "filled_blue",
      size: "large",
      text: "Sign up with Google",
      shape: "circle",
      color: "red",
      logo_alignment: "center",
      width: 60,
    
    });
   
  }, []);
//------------------------------------------------------------------------------------








  // save user data in local storage
  useEffect(() => {
    if (login.message === "Success" ) {
      window.localStorage.setItem("user", JSON.stringify(login));
      navigate("/");
    }
  }, [login]);

  //Form handler
  let handleSubmit = (e) => {
    e.preventDefault();
    if (usermail === "" || passwords === "") {
      setFormErr(true);
    } else {
      setFormErr(false);
      let userData = {
        email: usermail,
        password: passwords,
      };

      fetshData(url, userData);
    }
  };

  //E-mail input handler
  const userMailHandler = (e) => {
    let userMail = e.target.value;
    let userMailvalid = emailRegex.test(userMail);
    if (userMail === "" || userMailvalid === false) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
      setMail(userMail);
    }
  };

  //password input handler
  const passHandler = (e) => {
    let pass = e.target.value;
    if (pass === "" || pass.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
      setPasswords(pass);
    }
  };

  //fetch API function
  const fetshData = (url, data) => {
    axios
      .post(url, data)
      .then((response) => {
        setLogin(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div className="form" onSubmit={handleSubmit}>
        <div className="card">
          <h1>Log In</h1>
          <div id="signInDiv"></div>
          <form method="POST">
            {formErr && <p className="err">please fill all fields </p>}
            {login.message !== "" && login.message !== "Success" ? (
              <p className="err">{login.message}</p>
            ) : (
              ""
            )}

            <div className="form_inputs">
              <div className="inputs">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-area"
                  name="email"
                  onBlur={userMailHandler}
                />
                <div className="sign">
                  <img className="icon" src={email} alt="icon" />
                  <div className="line"></div>
                </div>
              </div>
              {emailErr && (
                <p className="err">
                  require format must be like this form user@gmail.com
                </p>
              )}
            </div>

            <div className="form_inputs">
              <div className="inputs">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-area"
                  name="password"
                  onBlur={passHandler}
                />
                <div className="sign">
                  <img className="icon" src={password} alt="icon" />
                  <div className="line"></div>
                </div>
              </div>
              {passErr && (
                <p className="err">
                  require password must be more than 8 character
                </p>
              )}
            </div>

            <h6>
              Don't have a Battlefy account yet?{" "}
              <Link to="/register">Sign up here.</Link>
            </h6>
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
      <div className="formimg">
        <div className="image">
          <img
            className="bg_img"
            src="https://blogthetech.com/wp-content/uploads/2020/11/3-Alternative-Esports-Games-To-Follow.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="logo_form">
        <img
          src="https://cdn.battlefy.com/helix/images/logos/logo-battlefy-white.svg"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Login;

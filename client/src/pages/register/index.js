import React , {useState ,useEffect} from "react"
import "./index.scss";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import email from "../../assets/icons/email.png";
import password from "../../assets/icons/unlock.png";
import user from "../../assets/icons/user.png";
import jwt_decode from "jwt-decode";

const Register = () => {
  let url = "http://localhost:5000/api/createaccount";
  let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [usermail, setMail] = useState("");
  const [passwords, setPasswords] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [users, setUser] = useState({});

  const [formErr,setFormErr] =useState(false);
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [confPassErr, setConfPassErr] = useState(false);

  const [userdata,setData]=useState({});
  const [login,setLogin]=useState({});
 



//Google auth
function handleCallBackResponse(response) {
  var userobject = jwt_decode(response.credential);



  axios.post(url,{
    userName: userobject.given_name,
    email: userobject.email,
    password: userobject.sub,
})
.then((response) => {
 setLogin(response.data);
 console.log(response.data);
})
.catch(function (error) {
console.error(error);
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
    text: "Sign_in with",
    shape: "circle",
    color: "red",
    logo_alignment: "center",
    width: 60,
  
  });
 
}, []);
//------------------------------------------------------------------------------------








  useEffect(()=>{
    if(login.message === "Success"){
      window.localStorage.setItem('user', JSON.stringify(login));
      navigate("/");
    }
  },[login])
  // console.log(userdata.message);
//Form handler
  let handleSubmit = (e) => {
    e.preventDefault();

    if(userName === "" || usermail === "" || passwords === ""|| confirmPass === ""){
      setFormErr(true)
    }else{
      setFormErr(false)
   
 axios.post(url,{
        userName: userName,
        email: usermail,
        password: passwords,
  })
  .then((response) => {
     setLogin(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
    }
    
  };

  
//username input handler
  const userNameHandler = (e) => {
    let userNamee = e.target.value;
    if (userNamee === "") {
      setUserErr(true);
    } else {
      setUserErr(false);
      setUserName(userNamee);
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

//confirm password input handler
  const confirmPassHandler = (e) => {
    let confirmPassword = e.target.value;
    if (
      confirmPassword === "" ||
      confirmPassword.length < 8 ||
      confirmPassword !== passwords
    ) {
      setConfPassErr(true);
    } else {
      setConfPassErr(false);
      setConfirmPass(confirmPassword);
    }
  };

  return (
    <>
      <div className="form" onSubmit={handleSubmit}>
        <div className="card">
          <h1>Sign Up</h1>
          <div id="signInDiv"></div>
          <form method="POST">

          {formErr && <p className="err">please fill all fields </p>}
          {login.message !== "" && login.message !== "Success" ?<p className="err">{login.message}</p> : ""}
            <div className="form_inputs">
            <div className="inputs">
              <input
                type="text"
                placeholder="Username"
                className="input-area"
                name="userName"
                onBlur={userNameHandler}
              />
              <div className="sign">
                <img className="icon" src={user} alt="icon" />
                <div className="line"></div>
              </div>
             
              
            </div>
            {userErr && <p className="err">require</p>}
            </div>

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
            {emailErr && <p className="err">require format must be like this form user@gmail.com</p>}
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
            {passErr && <p className="err">require password must be more than 8 character</p>}
            </div>


            <div className="form_inputs">
            <div className="inputs">
              <input
                type="password"
                placeholder="Confirm password"
                className="input-area"
                name="confirmPassword"
                onBlur={confirmPassHandler}
              />
              <div className="sign">
                <img className="icon" src={password} alt="icon" />
                <div className="line"></div>
              </div>
            </div>
            {confPassErr && <p className="err">require (the confirm password and password must be the same )</p>}
            </div>

            <h6>
              Already have a Battlefy account? <Link to ="/login">Login here.</Link>
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

export default Register;

import React from 'react';
import './Login.css';


function Login() {

  function loginPage(){
    alert('login is incorrect,  try again')
  }
  return (
    <div>
      
      <div className="loginParentDiv">
        <img 
        // width="200px" 
        // height="200px" 
        src='https://seeklogo.com/images/O/olx-logo-40484B6775-seeklogo.com.png' alt='' />
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            // defaultValue="Email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button onClick={loginPage} >Login</button>
        </form>
        {/* <a>Signup</a> */}
      </div>
    </div>
  );
}

export default Login;

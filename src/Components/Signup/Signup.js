import React from 'react';
import './Signup.css';

export default function Signup() {
  function signupPg(){
    alert ("your password is incorrect")
  }
  return (
    <div>
      <div className="signupParentDiv">
        {/* <img 
        // width="200px" 
        // height="200px" 
        src='https://seeklogo.com/images/O/olx-logo-40484B6775-seeklogo.com.png' alt=''/> */}
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="Username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="Email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={signupPg}>Signup</button>
        </form>
        {/* <a>Login</a> */}
      </div>
    </div>
  );
}

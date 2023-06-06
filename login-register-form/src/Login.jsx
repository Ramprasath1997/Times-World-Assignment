import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faGoogle,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email!="" && pass!=""){
          console.log(email);
          alert("Login Successful");
          props.onFormSwitch('home')
        }
     else{
      alert("Invalid username or password");

     }
    }

    return (
        <div className="auth-form-container">
            <h2>Sign-In</h2>
            <h3>New User ?<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Create an account.</button></h3>
            <form className="login-form" onSubmit={handleSubmit}>
              
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="username or email" id="email" name="email" />
              
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
                <div
      className="icon-and-text"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
                <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '5px' }} />
                <h3>Keep Me Signed In</h3>
                </div>
               
                <button type="submit">Sign In</button>
            </form>

            <br></br>
            <div
      className="horizontal-line-with-text"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <hr
        className="horizontal-line"
        style={{
          flex: '1',
          border: 'none',
          borderTop: '1px solid black',
        }}
      />
      <span>or Sign In with</span>
      <hr
        className="horizontal-line"
        style={{
          flex: '1',
          border: 'none',
          borderTop: '1px solid black',
        }}
      />
    </div>
<br></br>
    <div
      className="social-icons"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft:'30px'
      }}
    >
        <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '24px', marginRight: '30px' }} />
   <FontAwesomeIcon icon={faFacebook}   style={{ fontSize: '24px', marginRight: '30px' }} />
   <FontAwesomeIcon icon={faInstagram}   style={{ fontSize: '24px', marginRight: '30px' }} />
   <FontAwesomeIcon icon={faTwitter}   style={{ fontSize: '24px', marginRight: '10px' }} />
    </div>
        </div>
    )
}
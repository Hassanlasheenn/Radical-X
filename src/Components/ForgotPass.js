import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth';
import radicalXLogo from "../images/RadicallX-Black-Logo 1.svg";
import "../Styles/Login.css";


export default function ForgotPass() {

    const emailRef = useRef();
    const { resetPass } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

  
    const handleSubmit = async (e) => {
      e.preventDefault();
        
      try {
        setMessage('')
        setError("")
        setLoading(true)
        await resetPass(emailRef.current.value)
        setMessage('Check your inbox for further instructions ')
      } catch {
        setError("Failed to reset password");
      }
        setLoading(false);
    };

  return (
    <div>
      <div className="split left"></div>

      <div className="split right">
        <img src={radicalXLogo} alt="RadicalX" className="radicalX-logo"></img>
        {error && <Alert variant="success">{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert>}
        <form className="input-fields" onSubmit={handleSubmit}>
          <h1 className="title">Password Reset</h1>
          <input
            type="email"
            id="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            required
          />
          <br/>
            <button disabled={loading} className="login-button">Reset Password</button>
            <Link to={'/login'}>
                <button className="login-button">
                    Login
                </button>
            </Link>
        </form>
        <Link to='/signup'>
          <button className="login-button">Create Account</button>
        </Link>
      </div>
    </div>
  )
}

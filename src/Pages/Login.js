import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth';
import radicalXLogo from "../images/RadicallX-Black-Logo 1.svg";
import "../Styles/Login.css";


export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error] = useState("");
    const [loading] = useState(false);

  
    const handleSubmit = async (e) => {
      e.preventDefault();
        
      login(emailRef.current.value, passwordRef.current.value);
    };

  return (
    <div>
      <div className="split left"></div>

      <div className="split right">
        <img src={radicalXLogo} alt="RadicalX" className="radicalX-logo"></img>
        {error && <h3 className="red">{error}</h3>}
        <form className="input-fields" onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <input
            type="email"
            id="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <div className="password-container">
            <input
              type="password"
              id="password"
              ref={passwordRef}
              name="password"
              placeholder="Password"
              required
            />
            <button className="eye-button">
            </button>
          </div>
          <br/>
          <div>
            <label className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
              />
              Remember me
            </label>
            <Link to={"/forgot-password"} className="forget-password">
              Forgot password?{" "}
            </Link>
          </div>
          <button disabled={loading} className="login-button">Login</button>
        </form>
        <Link to='/signup'>
          <button className="login-button">Create Account</button>
        </Link>
      </div>
    </div>
  )
}

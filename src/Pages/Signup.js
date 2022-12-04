import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth';
import radicalXLogo from "../images/RadicallX-Black-Logo 1.svg";
import "../Styles/Login.css";


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
           await signup(emailRef.current.value, passwordRef.current.value)
           console.log(emailRef.current.value);
        }
        catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    };

  return (
    <div>
      <div className="split left"></div>

      <div className="split right">
        <img src={radicalXLogo} alt="RadicalX" className="radicalX-logo"></img>
        {error && <h3 className="red">{error}</h3>}
        <form className="input-fields" onSubmit={handleSubmit}>
          <h1 className="title">Sign up</h1>
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
            {/* <button className="eye-button" onClick={togglePassword}> */}
              {/* View Password btn */}
              {/* {showPassword ? (
                <img src={slashEye} alt="" />
              ) : (
                <img src={eye} alt="" />
              )} */}
            {/* </button> */}
          </div>
          <br/>
          <div className="password-container">
            <input
              type="password"
              id="password"
              ref={passwordConfirmRef}
              name="passwordConfirm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <br />
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
            <a href="/some link ...." className="forget-password">
              Forgot password?{" "}
            </a>
          </div>
          <button disabled={loading} className="login-button">Sign up</button>
        </form>
        Already a user ? <Link to='/login'>Login</Link>

        {loading && <h2>Created an account successfully</h2>}
      </div>
    </div>
  )
}

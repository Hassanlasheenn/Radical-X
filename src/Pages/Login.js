import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

// css & icons imports
import radicalXLogo from '../images/RadicallX-Black-Logo 1.svg';
import '../Styles/Login.css';


export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        setError('');
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value, isChecked);
      } catch {
        console.error(error);
        setError('Invalid Login');
      }
      setLoading(false);
    };


  return (
    <div>
      <div className='page left-page'></div>

      <div className='page right-page'>
        <img src={radicalXLogo} alt='RadicalX' className='radicalX-logo'></img>
        {error && <h3 className='error'>{error}</h3>}
        <form className='input-fields' onSubmit={handleSubmit}>
          <h1 className='title'>Login</h1>
          <input
            type='email'
            id='email'
            ref={emailRef}
            placeholder='Email'
            autoComplete='on'
            required
          />
          <br />
          <input
            type='password'
            id='password'
            ref={passwordRef}
            placeholder='Password'
            autoComplete='on'
            required
          />
          <br/>
          <div>
            <label htmlFor='check' className='remember-me'>
              <input
                type='checkbox'
                id='remember'
                value='remember'
                onChange={() => setIsChecked((prev) => !prev)}
              />
              Remember me
            </label>
            <Link to={'/forgot-password'} className='forget-password'>
              Forgot password?
            </Link>
          </div>

          <button disabled={loading} className='login-button'>Login</button>
        </form>
        <Link to='/signup'>
          <button className='login-button'>Create Account</button>
        </Link>
      </div>
    </div>
  )
}

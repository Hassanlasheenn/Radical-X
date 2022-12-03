import React, { useState } from 'react';

// css & icons imports
import '../Styles/Login.css';
import RadicalXLogo from '../images/RadicallX-Black-Logo 1.svg';
import smsIcon from '../images/sms.svg';
import lockIcon from '../images/lock.svg';
import eyeIcon from '../images/eye.svg';
import tickAprrenIcon from '../images/tick-square-apprenticeflow.svg';
import eyeSlashIcon from '../images/eye-slash.svg';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        console.log(`Show Password Clicked!`);
        // toggle icon
        if (showPassword) {
          setShowPassword(false);
        } else {
          setShowPassword(true);
        }
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      };

      
  return (
    <div className='login-container'>
        <div className='left-container'></div>

        <div className='right-container'>
            <img src={RadicalXLogo} alt='RadicalX Logo' /> 
            <form className='login-container--field'>
                <h3 className='login-text'>Login</h3>
                <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                />

                <div className='password-container'>
                    <input 
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                    />
                    <button className='button-eye' onClick={togglePassword}>
                        {showPassword ? (
                        <img src={eyeSlashIcon} alt='' />
                        ) : (
                        <img src={eyeIcon} alt='' />
                        )}
                    </button>
                </div>
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

                <button className='button-text' type='button' >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;

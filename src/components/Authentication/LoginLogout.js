// import React from "react";
// import './LoginLogout.css';
// import '@fontsource/open-sans';

// const LoginLogout = ()=>{
//   return(
    
//       <div className="login-wrap">
//         <div className="login-html">
//           <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
//           <label htmlFor="tab-1" className="tab">Sign In</label>
//           <input id="tab-2" type="radio" name="tab" className="sign-up" />
//           <label htmlFor="tab-2" className="tab">Sign Up</label>
//           <input id="tab-3" type="radio" name="tab" className="forgot-password" />
//           <label htmlFor="tab-3" className="tab"></label>
  
//           <div className="login-form">
//             <div className="sign-in-htm">
//               <div className="group">
//                 <label htmlFor="user" className="label">Phone</label>
//                 <input id="user" type="text" className="input" placeholder="Enter your phone number" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">Password</label>
//                 <input id="pass" type="password" className="input" placeholder="Enter your Password" />
//               </div>
//               <div className="group">
//                 <input id="check" type="checkbox" className="check" />
//                 <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
//               </div>
//               <div className="group">
//                 <input type="submit" className="button" value="Sign In" />
//               </div>
//               <div className="hr"></div>
//               <div className="foot-lnk">
//                 <label htmlFor="tab-3">Forgot Password?</label>
//               </div>
//             </div>
  
//             <div className="sign-up-htm">
//               <div className="group">
//                 <label htmlFor="user" className="label">Phone</label>
//                 <input id="user" type="text" className="input" placeholder="Enter your phone number" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">Password</label>
//                 <input id="pass" type="password" className="input" placeholder="Enter your Password" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass-repeat" className="label">Repeat Password</label>
//                 <input id="pass-repeat" type="password" className="input" placeholder="Re-enter your Password" />
//               </div>
//               <div className="group">
//                 <input type="submit" className="button" value="Sign Up" />
//                </div>
//                <div className="hr"></div>
//                <div className="foot-lnk">
//                  <label htmlFor="tab-1">Already Member?</label>
//                </div>
//              </div>
  
//              <div className="forgot-password-htm">
//                <div className="group">
//                  <label htmlFor="user" className="label">Phone</label>
//                  <input id="user" type="text" className="input" placeholder="Enter your phone number" />
//                </div>
//                <div className="group">
//                  <input type="submit" className="button" value="Send OTP" />
//                </div>
//                <div className="group">
//                  <label htmlFor="otp" className="label">OTP</label>
//                  <input id="otp" type="text" className="input" placeholder="Enter the OTP received" />
//                </div>
//                <div className="group">
//                  <label htmlFor="new-pass" className="label">New Password</label>
//                  <input id="new-pass" type="password" className="input" placeholder="Enter your new password" />
//                </div>
//                <div className="group">
//                  <input type="submit" className="button" value="Reset Password" />
//                </div>
//                <div className="hr"></div>
//                <div className="foot-lnk">
//                  <label htmlFor="tab-1">Back to Sign In</label>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      );
//  };
//  export default LoginLogout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginLogout.css';
import '@fontsource/open-sans';

const Authentication = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobileNumber === '7236870938' && password === '1234567') {
      // Redirect to admin panel
      navigate("/");
    } else {
      setError('Invalid mobile number or password');
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
        <label htmlFor="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">Sign Up</label>
        <input id="tab-3" type="radio" name="tab" className="forgot-password" />
        <label htmlFor="tab-3" className="tab"></label>

        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">Phone</label>
              <input
                id="user"
                type="text"
                className="input"
                placeholder="Enter your phone number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input
                id="pass"
                type="password"
                className="input"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="group">
              <input id="check" type="checkbox" className="check" />
              <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" onClick={handleLogin} />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className="hr"></div>
            <div className="foot-lnk">
              <label htmlFor="tab-3">Forgot Password?</label>
            </div>
          </div>

          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="user" className="label">Phone</label>
              <input id="user" type="text" className="input" placeholder="Enter your phone number" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" placeholder="Enter your Password" />
            </div>
            <div className="group">
              <label htmlFor="pass-repeat" className="label">Repeat Password</label>
              <input id="pass-repeat" type="password" className="input" placeholder="Re-enter your Password" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label htmlFor="tab-1">Already Member?</label>
            </div>
          </div>

          <div className="forgot-password-htm">
            <div className="group">
              <label htmlFor="user" className="label">Phone</label>
              <input id="user" type="text" className="input" placeholder="Enter your phone number" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Send OTP" />
            </div>
            <div className="group">
              <label htmlFor="otp" className="label">OTP</label>
              <input id="otp" type="text" className="input" placeholder="Enter the OTP received" />
            </div>
            <div className="group">
              <label htmlFor="new-pass" className="label">New Password</label>
              <input id="new-pass" type="password" className="input" placeholder="Enter your new password" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Reset Password" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label htmlFor="tab-1">Back to Sign In</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

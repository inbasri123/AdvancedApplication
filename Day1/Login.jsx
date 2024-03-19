import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/css/Login.css";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHolder = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (username.length === 0 || password.length === 0) {
      alert("Enter all the fields");
    } else if (!regex.test(username)) {
      alert("Enter a valid Email Address");
    } else if (password.length < 8) {
      alert("Enter at least 8 characters in password");
    } else {
      navigate('/');
    }
  };

  return (
    <div className="body2">
      <form onSubmit={formHolder}>
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="login-title">ADMIN PANEL</div>
            <div className="login-form">
              <div className="form-group">
                <label className="form-control-label">USERNAME:</label>
                <input type="text" className="form-control" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-control-label">PASSWORD:</label>
                <input type="password" className="form-control" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="loginbttm">
                <div className="login-btm login-text">
                  {/* Error Message */}
                </div>
                <div className="login-btm login-button">
                  <button type="submit" id="sibtn" className="btn btn-outline-primary">LOGIN</button>
                </div><br/>
                <div className='para-field'>
                  <p>Don't have an account? <span><Link to='/register'>Sign Up</Link></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </form>
    </div>
  )
}

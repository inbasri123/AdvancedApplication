import React, { useState } from 'react'
import"../../assets/css/Register.css";
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate=useNavigate();
  const handleSignUpClick=()=>
  {
    navigate("/login");
  }
  const[fname,setFname]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const formHolder = (e) =>{
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(fname.length===0 || email.length===0 || password.length===0)
    {
      alert("Enter all the fields");
    }
    if(!regex.test(email))
    {
      alert("Enter a valid Email Address");
    }
    if(password.length<8)
    {
      alert("Enter atleast 8 character in password");
    }
    else{
      navigate('/');
    }
  }
  return (
    <div>
    <div className='body1'>
  <div id="signup">
    <h1>
      Sign Up for <strong>Lightly</strong>
    </h1>
    <form onSubmit={formHolder}>
    <label htmlFor="fname">Full name:</label>
    <input type="text" id="name" placeholder="" value={fname}onChange={(e)=>setFname(e.target.value)}/>
    <label htmlFor="email">E-mail address:</label>
    <input type="email" id="email" placeholder=" " value={email}onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" placeholder="" value={password}onChange={(e)=>setPassword(e.target.value)}/><br/>
    <input type="submit"></input>
    <button type="button" id="sibtn2" className='disable2' onClick={handleSignUpClick}>Sign in</button>
    </form>
  </div>
    </div>
    </div>
  )
}


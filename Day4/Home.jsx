import React from 'react'
import"../assets/css/Home.css";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className='body3'>
    </div>
    <div className='t1'><strong>FUN AND ENTERTAINMENT</strong></div>
    <div className='rect'>
    <div className='img'></div>
    </div>
    <div className='rect1'>
    <div className='img1'></div>
    </div>
    <div className='rect2'>
    <div className='img2'></div>
    </div>
    <div className='t2'><strong>GYM,SPA AND BAR</strong></div>
    <div className='rect3'>
    <div className='img3'></div>
    </div>
    <div className='rect4'>
    <div className='img4'></div>
    </div>
    <div className='rect8'>
    <div className='img8'></div>
    </div>
    <div className='t3'><strong>FOODS</strong></div>
    <div className='rect5'>
    <div className='img5'></div>
    </div>
    <div className='rect6'>
    <div className='img6'></div>
    </div>
    <div className='rect7'>
    <div className='img7'></div>
    </div>




    <div className='footfull'>
    <footer>
    <div class="container1">
    
    <div class="footer-content">
      <h3>ContactUs</h3>
      <p>Email:Info@example.com</p>
      <p>Phone:+121 56556 565556</p>
      <p>Address:Your Address 123 street</p>
   </div>
  
   <div class="footer-content">
     <h3>QuickLinks</h3>
      <ul class="list">
         <li>Home</li>
         <li>About</li>
         <li>ContactUs</li>
         <li>Login</li>
         <li>Register</li>
         <li>Terms</li>
         <li>Policy</li>
      </ul>
  </div>
   <div class="footer-content">
     <h3>FollowUs</h3>
     <ul class="social-icons">
     
     <li><FaFacebook /></li>
     <li><FaSquareTwitter /></li>
     <li><FaInstagram /></li>
    </ul>
    
   </div>

   </div>

<div class="bottom-bar">
 <p>&copy; 2023 your company . All rights reserved</p>
</div>

</footer>
</div>
    </div>
    
  )
}

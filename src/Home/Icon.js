import React from 'react'
import { AiFillGithub,AiOutlineInstagram} from 'react-icons/ai';
import { FaLinkedinIn,FaFacebookF} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import './Home.css';


function Icon() {
  return (
<div style={{padding: '10px'}}className="d-flex justify-content-center ms-5 mt-4 mp">
<a href="https://www.facebook.com/20010610a/" target="_blank"><FiFacebook size={30} /></a> 
<a href="https://www.linkedin.com/in/ayoub-ouni-8a785a239/"  target="_blank"><span style={{marginLeft: '10px'}}><FaLinkedinIn size={30} /></span></a>
<a href="https://github.com/AyoubOuni"  target="_blank"><span style={{marginLeft: '10px'}}><AiFillGithub size={30} /></span></a>
<a href="https://www.instagram.com/ayoub._ouni/"  target="_blank"> <span style={{marginLeft: '10px'}}><AiOutlineInstagram size={30} /></span></a>
</div>)
}

export default Icon

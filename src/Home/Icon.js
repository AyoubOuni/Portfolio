import React from 'react'
import { AiFillGithub,AiOutlineInstagram} from 'react-icons/ai';
import { FaLinkedinIn,FaFacebookF} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import './Home.css';


function Icon() {
  return (
<div style={{padding: '10px'}}className="d-flex justify-content-center ms-5 mt-4 mp">
<a href="https://www.facebook.com/20010610a/" className='border bg-white p-2' style={{borderRadius: '50%'}} target="_blank"><FiFacebook size={30} /></a> 
<a href="https://www.linkedin.com/in/ayoub-ouni-8a785a239/"  className='border bg-white p-2 ms-3' style={{borderRadius: '50%'}}  target="_blank"><span ><FaLinkedinIn size={30} /></span></a>
<a href="https://github.com/AyoubOuni" className='border bg-white p-2 ms-3' style={{borderRadius: '50%'}} target="_blank"><span ><AiFillGithub size={30} /></span></a>
<a href="https://www.instagram.com/ayoub._ouni/" className='border bg-white p-2 ms-3' style={{borderRadius: '50%'}}  target="_blank"> <span ><AiOutlineInstagram size={30} /></span></a>
</div>)
}

export default Icon

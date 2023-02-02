import React, { Component } from 'react'
import {AiOutlineFile} from 'react-icons/ai';
import './Home.css';
import CV from "./CV.pdf"
import Img from'./Img'
import {VscChevronUp} from 'react-icons/vsc';
import Icon from'./Icon'
import About from'./../Aboutme/About'
import Projects from'./../Projects/Projects'
import Skills from'./../Skills/Skills'
import Contact from'./../Contact/Contact'
import Education from'./../Education/Education'
import Experience from'./../Experience/Experience'
import {useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function Home() {
  useEffect(()=>{
    window.addEventListener('scroll', () => {
        if (window.scrollY > 160) {
            document.getElementById("button").style.display="inline-block";
        } 
        else{
          document.getElementById("button").style.display="none";
        }
    });
    
}, []);
const language=useSelector(state => state.language);
  return (
    <>
   <div id="home">
    <div className="all" >
    
   {(language===false)?<span><div className=" ms-5 ab " style={{  display: 'grid',placeItems: 'center'}}><pre className="line-1 anim-typewriter ms-2 mt-4">  Salut, je suis Ayoub Ouni</pre>
<p className="line-1 anim-typewriter2">Je suis un étudiant en génie logiciel</p></div></span>:<span>
<div className=" ms-5 ab " style={{  display: 'grid',placeItems: 'center'}}><pre className="line-1 anim-typewriter ms-2 mt-4">    Hi There , I'm Ayoub Ouni </pre>
<p className="line-1 anim-typewriter2">I'm a Software  Engineering Student</p></div></span>}

<br/>
<div className=" d-flex justify-content-center" ><Img /></div>
<div className="mp" ><Icon /></div>
<div className="ms-2 "><div  className="d-flex justify-content-center ms-5 mt-2 heartbeat  t  " ><a  className="button-three text-nowrap text-uppercase ps-3"role="button" href={CV} target="_blank" ><AiOutlineFile className="mb-1 me-1" />{(language===false)?"voir mon CV":"see my resume"}</a></div></div>
<br/>
</div>
</div>
<About />
<Skills />
<Education />
<Experience />
<Projects />
<Contact />
<a id="button" className='text-white' style={{backgroundColor:"#03224c"}}onClick={()=> window.scrollTo({
      top: 0,
      behavior: "smooth"
    })}><VscChevronUp size={30}/></a>




</>
  )
  
}
<script></script>

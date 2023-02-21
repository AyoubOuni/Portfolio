import React, { Component } from 'react'
import {AiOutlineFile} from 'react-icons/ai';
import {VscCloudDownload} from 'react-icons/vsc';
import './Home.css';
import CV from "./CV.pdf"
import ScrollToTop from 'react-scroll-up'
import Img from'./Img'
import {VscChevronUp} from 'react-icons/vsc';
import About from'./../Aboutme/About'
import Projects from'./../Projects/Projects'
import Skills from'./../Skills/Skills'
import Contact from'./../Contact/Contact'
import Education from'./../Education/Education'
import Experience from'./../Experience/Experience'
import Services from'./../Services/Services'
import {useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from "./../NavBar/Router"

export default function Home() {
  useEffect(()=>{
    window.addEventListener('scroll', () => {
        if (window.scrollY > 690) {
          document.getElementById("about1").style.color='black'; 

            document.getElementsByClassName("blue")[0].style.backgroundColor='white'; 
            document.getElementsByClassName("blue")[0].style.color='black'; 
            document.getElementsByClassName("button_lang")[0].style.color='black';
            document.getElementsByClassName("button_lang")[1].style.color='black';
         

            document.getElementsByClassName("notactive")[0].style.color='black'; 
            document.getElementsByClassName("notactive")[1].style.color='black'; 
            document.getElementsByClassName("notactive")[2].style.color='black'; 
            document.getElementsByClassName("notactive")[3].style.color='black'; 
            document.getElementsByClassName("notactive")[4].style.color='black'; 
            document.getElementsByClassName("notactive")[5].style.color='black'; 
            document.getElementsByClassName("notactive")[6].style.color='black'; 
            document.getElementsByClassName("notactive")[7].style.color='black'; 
            document.getElementsByClassName(".button_lang")[0].style.color='black'; 
            document.getElementsByClassName(".button_lang")[1].style.color='black'; 
            document.getElementsByClassName(".button_lang")[2].style.color='black'; 
            
          
          } 
        else{
          document.getElementsByClassName("blue")[0].style.backgroundColor='#1e1e1e'
          document.getElementsByClassName("blue")[0].style.color='white';
          document.getElementsByClassName("button_lang")[0].style.color='white';
          document.getElementsByClassName("button_lang")[1].style.color='white';
          document.getElementsByClassName("toggle")[0].style.color='white'; 
          document.getElementsByClassName("toggle")[0].style.backgroundColor='#1e1e1e'; 

             
          document.getElementsByClassName("notactive")[0].style.color='white'; 
          document.getElementsByClassName("notactive")[1].style.color='white'; 
          document.getElementsByClassName("notactive")[2].style.color='white'; 
          document.getElementsByClassName("notactive")[3].style.color='white'; 
          document.getElementsByClassName("notactive")[4].style.color='white'; 
          document.getElementsByClassName("notactive")[5].style.color='white'; 
          document.getElementsByClassName("notactive")[6].style.color='white'; 
          document.getElementsByClassName("notactive")[7].style.color='white'; 

                       
        }
    });
    
}, []);
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
useEffect(()=>{
  document.getElementById('dev2').style.display='none';
  document.getElementById('dev4').style.display='block';

},[])


setTimeout(()=>{
  document.getElementById('dev1').style.display='none';
},8000)
setTimeout(()=>{
  document.getElementById('dev2').style.display='block';
},8100)
setTimeout(()=>{
  document.getElementById('dev2').classList.remove('typewriter3');
},11000)

setTimeout(()=>{
  document.getElementById('dev4').classList.remove('typewriter3');
},3900)
const language=useSelector(state => state.language);
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  if(this.txt=="Full   Stack Developer."){
    fullTxt='Full   Stack Developer';
  }
 else if(this.txt=="Développeur Full Stackr."){
    fullTxt='Développeur Full Stack';
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 120;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<1; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if(i==1){
      alert('wiw')
              break;
            }
    if (toRotate) {
      console.log(JSON.parse(toRotate)[1])

      new TxtRotate(elements[i], JSON.parse(toRotate), period);

      
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

function hide(){
  document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
}
  return (
    <>
        <Router />  

   <div id="home" onClick={hide}>
    <div className="all text-white " >

 <div className="d-flex justify-content-start h3 ms-5 pt-5 position-relative" style={{bottom:'120px'}}> 
 
<br/>


   </div>
   <div className="none bott">
   <div class="wrapper position-relative " style={{ marginLeft:'150px',width:'600px'}}>
    <div className="">
   {(language===false)?<span><div className=" ms-5 mt-5 sizze text-center "style={{  display: 'grid',placeItems: 'center'}} ><div className="static-txt txtr ms-2 mt-4">  Salut , je suis Ayoub Ouni</div>
</div>

</span>:<span>
<div className=" ms-5 mt-5 sizze text-center" style={{  display: 'grid',placeItems: 'center'}}><div className=" static-txt txtr ms-2 mt-4">    Hi , I'm Ayoub Ouni </div>
</div></span>}</div>
<br/>
<br/>
  <br/>
  <br/>
  <br/>


<div className="d-flex position-absolute  ms-5 pt-5" style={{top:'100px'}}>

    <div class="static-txt position-relative me-2 text-nowrap" style={{left:'10px'}} > {(language===false)?<span >Je suis un </span>:<span>I'm a </span>}</div>
    <div class="container3" >
  <pre class="typewriter texting ms-2 text-nowrap" id='dev1'>{(language===false)?<span >étudiant en génie logiciel</span> :<span>Software Engineering Student</span>}</pre>
  <span class="typewriter3 texting ms-2 text-nowrap" id='dev2'>{(language===false)?<span >  Développeur Full Stack</span>:<span>Full Stack Developer</span>}</span>
</div>
  </div>
  </div>
<div className=" d-flex justify-content-end me-5 position-relative btm " style={{ bottom: '320px',right:'100px'}}><Img />

</div>
<div className="ms-2  "><div  className="position-relative ms-5 mt-2    tb  " style={{bottom:'510px',paddingLeft:'158px',width:'600px'}}><a  className="button-three   rounded-5 text-nowrap text-dark bg-white text-uppercase ps-3"role="button" href={CV} target="_blank" ><VscCloudDownload className="mb-1 me-1" />{(language===false)?"Telecharger mon CV":"Downlowd my resume"}</a></div></div>

<div className="position-relative mousir d-none" style={{bottom:'320px',width:'300px',right:'100px'}}>
<div class="boxr">
		<span></span>
		<span></span>
		<span></span>
	  </div>
  </div>

<div className="position-relative mousing" style={{bottom:'420px',marginLeft:'50px',width:'600px'}}>
<div class="mouse"></div>
  <div class="arrow-scroll">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
  </div>
   <div className="d-none r">
    
   
   <div class="wrapper  d-flex justify-content-center"  >
    <div className="position-relative" style={{bottom:'80px'}}>
   {(language===false)?<span><div className=" ms-5 mt-5   text-center text-nowrap "style={{  display: 'grid',placeItems: 'center'}} ><div className="static-txt text-nowrap text-center   mt-4" style={{marginLeft:'-30px'}}>  Salut , je suis Ayoub Ouni</div>
</div>

</span>:<span>
<div className=" ms-5 mt-5  text-center text-nowrap " style={{  display: 'grid',placeItems: 'center'}}><div className=" static-txt text-nowrap  mt-4 " style={{marginRight:'50px'}}>    Hi , I'm Ayoub Ouni </div>
</div></span>}
<div className="d-flex   ms-2 pt-2" >

    <div class="static-txt position-relative me-2 text-nowrap" style={{left:'10px'}} > {(language===false)?<span className='position-relative' style={{right:'1px'}}>Je suis un </span>:<span>I'm a </span>}</div>
    <div class="container3" >
  <span class="typewriter3 texting ms-2 text-nowrap" id='dev4'>{(language===false)?<span className='position-relative' style={{right:'2px'}}>  Développeur Full Stack</span>:<span>Full Stack Developer</span>}</span>

</div>
  </div>
</div>
<br/>
<br/>
  <br/>
  <br/>
  <br/>




  </div>
<div className=" d-flex justify-content-center me-5 position-relative " style={{ bottom: '120px',right:'39px'}}><Img />

</div>
<div className="ms-2 d-flex justify-content-center "><div  className="position-relative ms-5 mt-2    tr  " style={{bottom:'80px',left:'23px',width:'300px'}}><a  className="button-three   rounded-5 text-nowrap text-dark bg-white text-uppercase ps-3"role="button" href={CV} target="_blank" ><VscCloudDownload className="mb-1 me-1" />{(language===false)?"Telecharger mon CV":"Downlowd my resume"}</a></div></div>
<div className="d-flex justify-content-start ms-4">

<div className="position-relative " style={{top:'-48px',width:'300px',right:'140px'}}>
<div class="boxr">
		<span></span>
		<span></span>
		<span></span>
	  </div>
  </div>
  </div>
  </div>
</div>
</div>
<About />
<Services/>
<Skills />
<Education />
<Experience />
<Projects />
<Contact />

<a id="button" className='text-white' style={{backgroundColor:"#029eff"}}onClick={()=> window.scrollTo({
      top: 0,
      behavior: "smooth"
    })}><VscChevronUp size={30}/></a>


</>
  )
  
}

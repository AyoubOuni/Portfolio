import React from 'react'
import { useSelector } from 'react-redux';
import {BiCodeAlt} from 'react-icons/bi';
import './Services.css'
import dev from './dev2.jpg'
import responsive from './responsive2.jpg'
import {FaReact,FaCss3Alt,FaJava,FaBootstrap,FaWordpress,FaPython,FaNodeJs}  from 'react-icons/fa';
import {AiFillHtml5,AiFillGithub}  from 'react-icons/ai';
import {ImGit}  from 'react-icons/im';
import {FiFigma}  from 'react-icons/fi';
import {GrMysql}  from 'react-icons/gr';
import {SiJavascript,SiRedux,SiPhp,SiExpress}  from 'react-icons/si';
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active3");
    } else {
      reveals[i].classList.remove("active3");
    }
  }
}
function hide(){
  document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
}
function Services() {

  window.addEventListener("scroll", reveal);

  const language=useSelector(state => state.language);


  return (
   
    <div id="service" onClick={hide} className='container position-relative pt-3' style={{bottom:'100px'}}>
      <div className=" pt-5">
    <div className="pb-4 padding2 pt-3" >
        <div className="d-flex justify-content-center  mb-3 none">
        <h1 className=" text-nowrap t " style={{color:' black',textTransform:'uppercase'}}>{(language===false)?"Mes services  ":" My Services"}<hr/></h1>
    </div>
    <div className=" d-none ms-5  mt-1 f ">
    <h1 className="mt-4  text-nowrap t " style={{color:' black',textTransform:'uppercase'}}>{(language===false)?"Mes services  ":" My Services"}<hr /></h1>
    </div>
  <div  className="container marg_left d-flex justify-content-center">
    <div className="row    mt-2   g-5 " >
    
    <div class="container col">
  <div class="content" style={{cursor:'pointer'}}>
      <div class="content-overlay"></div>
      <img class="content-image" src={dev} alt=""  />
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">{(language===false)?"Développement web":"Web Development"}
</h3>
        <p class="content-text little_one1"style={{fontSize:'18px'}}>{(language===false)?"Je suis expert en":"I am Expert In"}</p>
      </div>
    
  </div>
</div>
    <div class="container col">
  <div class="content"  style={{cursor:'pointer'}}>
      <div class="content-overlay"></div>
      <img class="content-image" src={responsive} alt="" />
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title ">Responsive Design
</h3>
        <p class="content-text little_one1" style={{fontSize:'18px'}}>{(language===false)?"Je suis expert en":"I am Expert In"}</p>
      </div>
    
  </div>
</div>

    </div>
    <br/>
   
    <br/>
    <br/>
    
    </div>
    </div>
    </div>
    <br/>
    </div>
    
   
  
  )
}

export default Services

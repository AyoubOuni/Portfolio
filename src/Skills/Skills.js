import React from 'react'
import './Skills.css'
import { useSelector } from 'react-redux';
import {BiCodeAlt} from 'react-icons/bi';
import {FaReact,FaCss3Alt,FaJava,FaBootstrap,FaWordpress,FaPython,FaNodeJs}  from 'react-icons/fa';
import {AiFillHtml5,AiFillGithub}  from 'react-icons/ai';
import {ImGit}  from 'react-icons/im';
import {FiFigma}  from 'react-icons/fi';
import {GrMysql}  from 'react-icons/gr';
import {SiJavascript,SiRedux,SiPhp,SiExpress}  from 'react-icons/si';
import Bar_of_skills from './Bar_of_skills'
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
function Skills() {

  window.addEventListener("scroll", reveal);

  const language=useSelector(state => state.language);


  return (
   
    <div id="skills"  className='all2' >
      <div className="container ">
    <div className="py-4 padding2" >
        <div className="d-flex justify-content-start  my-3 none">
        <h1 className="mt-4 text-nowrap t " style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><BiCodeAlt className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Mes  Compétences  ":" My Skills"}</h1>
    </div>
    <div className=" d-none ms-5  mt-1 f ">
    <h1 className="mt-4  text-nowrap t " style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><BiCodeAlt className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Mes  Compétences  ":" My Skills"}</h1>
    </div>
  <div  className="container marg_left">
    <div className="row   reveal   row-cols-5 g-3 " >
    <span className=" col"><Bar_of_skills picture={<AiFillHtml5  size={30} />} name="HTML" /></span>
    <span className=" col"><Bar_of_skills picture={<FaCss3Alt size={30} />} name="CSS" /></span>
    <span className=" col"><Bar_of_skills picture={<SiJavascript size={30} />} name="JavaScript" /></span>
    <span className=" col"><Bar_of_skills picture={<FaBootstrap size={30} />} name="Bootstrap" /></span>
    <span className=" col "><Bar_of_skills picture={<FaReact  size={30} />} name="React" /></span>
    <span className=" col"><Bar_of_skills picture={<SiRedux size={30} />} name="Redux" /></span>
    <span className=" col"><Bar_of_skills picture={<FaWordpress size={30} />} name="Wordpress" /></span>
    <span className=" col "><Bar_of_skills picture={<SiPhp size={30}/>} name="Php" /></span>
    <span className=" col "><Bar_of_skills picture={<FaNodeJs size={30}/>} name="Node" /></span>
    <span className=" col "><Bar_of_skills picture={<SiExpress size={30}/>} name="Express" /></span>
    <span className=" col "><Bar_of_skills picture={<GrMysql size={30}/>} name="MySQL" /></span>
    <span className=" col "><Bar_of_skills picture={<ImGit size={30} />} name="Git" /></span>
    <span className=" col "><Bar_of_skills picture={<AiFillGithub size={30} />} name="GitHub" /></span>
    <span className=" col "><Bar_of_skills picture={<FaJava size={30} />} name="Java" /></span>
    <span className=" col "><Bar_of_skills picture={<FaPython size={30}/>} name="Python" /></span>
    <span className=" col "><Bar_of_skills picture={<FiFigma size={30}/>} name="Figma" /></span>

    </div>
    <br/>
    <br/>
    </div>
    </div>
    </div>
    </div>
    
   
  
  )
}

export default Skills

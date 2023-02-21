import React from 'react'
import './About.css'
import { useSelector } from 'react-redux';
import photo2 from "./show2.gif"

import {BsFileEarmarkPerson} from 'react-icons/bs';
import {BsFillCheckCircleFill,BsFillCalendarDayFill} from 'react-icons/bs';
function About() {
  function hide(){
    document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
  }
  const language=useSelector(state => state.language);
  return (
    <div id="about" onClick={hide}  className='container  mt-5' >
  
  <div className=" padding  pt-5  position-relative mt-5" style={{bottom:'56px'}}>
   
   <div className="none mt-4 ">
 
    <div className="d-flex justify-content-center  pt-4 mt-5 ">
    <h1  className="mb-4 gy text-nowrap t"style={{textTransform:'uppercase'}}>{(language===false)?"à propos moi   ":" About me"}<hr/></h1>

      <h1   className="   fonte"  style={{color:' black',textTransform:'uppercase'}}><div className="   w  position-relative shadow-lg  w bg-body rounded n" ></div><span className="ms-2"></span></h1>
    </div>
    <div className="d-none ms-5    d-flex justify-content-center ms-4 my-2 f rt">
    <h1  className=" ms-4 hoi text-nowrap t"style={{textTransform:'uppercase'}}> {(language===false)?'à propos moi':'About me'}<hr/></h1>
    </div>
    <div className="d-flex justify-content-start ru  show" style={{textAlign: 'center'}} >
      <div className="tu ru  ">
    <h4 className='ms-5  hei widt ' style={{fontSize: '23px'}}>{(language===false)?<><span>Salut ! Je m'appelle Ayoub Ouni. Je suis un étudiant en génie logiciel.
  J'ai 22 ans.Je suis développeur full stack.
  Je suis quelqu'un qui peut s'adapter à n'importe quel environnement possible.
  J'ai acquis les compétences et  les connaissances nécessaires pour faire
   votre projet avec un succès.La plupart des compétences que j'ai acquises sur mon
    propre à partir d'Internet.</span>
     <div className="position-relative text-nowrap" style={{top:'3px',right:'30px'}}>
     <BsFillCheckCircleFill className='ms-5' size={30} /><span className="ms-2 position-relative h5" style={{top:'2px',fontWeight:'bold'}}>4 PROJETS RÉALISÉS</span> 
 
 <BsFillCalendarDayFill className='ms-5' size={30} /><span className="ms-2 position-relative h5" style={{top:'3px',fontWeight:'bold'}}>2 ANS D'EXPERIENCE</span>
     </div></>
    :<><span>Hi ! My name is Ayoub Ouni .I'm a Software engineering Student.
    I'm 22 years old.I'm a full stack developer.
    I am someone who Can adapt to any environment possible.
    I have acquired the skills and knowledge necessary to make
     your project a success.Most of the skills I learned on my
      own from the Internet.</span>
        <div className="position-relative text-nowrap" style={{top:'23px',right:'30px'}}>
        <BsFillCheckCircleFill className='ms-5' size={30} /><span className="ms-2 position-relative h5" style={{top:'2px',fontWeight:'bold'}}>4 PROJECTS COMPLETED</span> 
    
    <BsFillCalendarDayFill className='ms-5' size={30} /><span className="ms-2 position-relative h5" style={{top:'3px',fontWeight:'bold'}}>2 YEARS OF EXPERIENCE</span>
        </div>
        </>
        }
      </h4>
     
      </div>
      

      <span className="d-flex justify-content-end position-relative mt-5 position-relative" style={{bottom:"80px"}}>
    <img src={photo2} width="400" height="500" className="mt-3 none  img-fluid" ></img>
    </span>
      
    </div>
    </div>
    

  
   
   {(language===false)?
   <>
   <div className=" ">
   <div className="d-none ms-5  mt-5  d-flex justify-content-center ms-4 my-2 f ">
   <h1  className=" ms-4 hoi text-nowrap t"style={{textTransform:'uppercase'}}>à propos moi<hr/></h1>

    </div>
    </div>
       <div className="dnone3">

    <div className="d-flex justify-content-start  mt-1 " style={{textAlign: 'center'}} >
    <div className="">
  <h4 className=' mt-1 hei little ' style={{marginLeft: '3px'}}>Salut ! Je m'appelle Ayoub Ouni. Je suis un étudiant en génie logiciel.
  J'ai 22 ans.Je suis développeur full stack.
  Je suis quelqu'un qui peut s'adapter à n'importe quel environnement possible.
  J'ai acquis les compétences et  les connaissances nécessaires pour faire
   votre projet avec un succès.La plupart des compétences que j'ai acquises sur mon
    propre à partir d'Internet.
    </h4>
    </div>
      <br/>
    </div>
     <div className="d-flex justify-content-center  ">
     <img src={photo2} width="270" height="270" className="mt-3 ms-4 pic"></img>
     </div>
    </div>
    </>
    :
    <div className="">
          <div className="">
    <div className="">
    <div className="d-none ms-5  mt-5   d-flex justify-content-center ms-5 my-2 f ">
    <h1  className=" ms-4  hoi text-nowrap t"style={{textTransform:'uppercase'}}>About me<hr/></h1>

    </div>
    </div>
    </div>
    <div className="dnone3">
    <div className=" d-flex justify-content-center  mt-1 " style={{textAlign: 'center'}} >
      
    <h4 className='ms-3 mt-1 hei little '>Hi ! My name is Ayoub Ouni . I'm a Software engineering Student.
    I'm 22 years old.I'm a full stack developer.
    I am someone who Can adapt to any environment possible.
    I have acquired the skills and knowledge necessary to make
     your project a success.Most of the skills I learned on my own from the Internet.
      </h4>
      </div>
      <br/>
    
     <div className="d-flex justify-content-center  ">
     <img src={photo2} width="270" height="270" className="mt-3 ms-3 pic "></img>
     </div>
     </div>
    </div>}
    
    </div>
    
    </div>
  )
}

export default About

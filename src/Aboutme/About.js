import React from 'react'
import './About.css'
import { useSelector } from 'react-redux';
import photo2 from "./show2.gif"
import {BsFileEarmarkPerson} from 'react-icons/bs';
function About() {
  const language=useSelector(state => state.language);
  return (
    <div className='container'>
    <div id="about"  >   
  <br  />
  <br  className="dontshow3"/>
  <div className="pt-5 padding2">
   {(language===false)?
   <div className="none ">
   <div className="d-flex justify-content-start   ">
      <h1  style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><BsFileEarmarkPerson className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">à propos moi</span></h1>
    </div>
    <div className="">
    <div className="  d-flex justify-content-start ru mt-5 show " style={{textAlign: 'center'}} >
    <div className="tu ru  ms-5 mt-1 ">
  <h4 className='ms-5 hei widt'>Salut ! Je m'appelle Ayoub Ouni. Je suis un étudiant en génie logiciel.
  J'ai 22 ans.Je suis développeur full stack.<br/>
  Je suis quelqu'un qui peut s'adapter à n'importe quel environnement possible.
  J'ai acquis les compétences et  les connaissances nécessaires pour faire
   votre projet avec un succès.La plupart des compétences que j'ai acquises sur mon
    propre à partir d'Internet.
    </h4>
    </div>
    <span className=" d-flex justify-content-end position-relative mt-5 position-relative" style={{bottom:"85px",left:"115px"}}>
    <img src={photo2} width="300" height="300" className="mt-3 none "></img>
    </span>
  </div>
  </div>
  </div>
    :<div className="none ">
    <div className="d-flex justify-content-start  my-3 ">
      <h1  style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  w bg-body rounded n" ><BsFileEarmarkPerson className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">About me</span></h1>
    </div>
    <div className="d-flex justify-content-start ru mt-5 show" style={{textAlign: 'center'}} >
      <div className="tu ru  ">
    <h4 className='ms-5 mt-1 hei widt' >Hi ! My name is Ayoub Ouni .I'm a Software engineering Student.
    I'm 22 years old.I'm a full stack developer.
    I am someone who Can adapt to any environment possible.
    I have acquired the skills and knowledge necessary to make
     your project a success.Most of the skills I learned on my
      own from the Internet.
      </h4>
      </div>
      <span className="d-flex justify-content-end position-relative mt-5 position-relative" style={{bottom:"85px",left:"115px"}}>
    <img src={photo2} width="300" height="300" className="mt-3 none img-fluid" ></img>
    </span>
    </div>
    </div>}
   {(language===false)?
   <>
   <div className=" ">
   <div className="d-none ms-5  mt-1  d-flex justify-content-center ms-4 my-2 f">
      <h1 className="ms-3 text-nowrap" style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><BsFileEarmarkPerson className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">à propos moi</span></h1>
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
     <img src={photo2} width="200" height="200" className="mt-3 ms-4 "></img>
     </div>
    </div>
    </>
    :
    <div className="">
          <div className="">
    <div className="">
    <div className="d-none ms-5  mt-1   d-flex justify-content-center ms-5 my-2 f ">
      <h1 className="ms-4 text-nowrap" style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  w bg-body rounded n" ><BsFileEarmarkPerson className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">About me</span></h1>
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
     <img src={photo2} width="200" height="200" className="mt-3 ms-3 "></img>
     </div>
     </div>
    </div>}
    
    </div>
    
    </div>
    </div>
  )
}

export default About

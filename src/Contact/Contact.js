import React from 'react'
import CV from "./CV.pdf"
import show from "./show.png"
import show2 from "./show2.png"
import {AiOutlineFile} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {TiContacts} from 'react-icons/ti';
import { useSelector } from 'react-redux';
import './Contact.css'
function reveal() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active4");
      } else {
        reveals[i].classList.remove("active4");
      }
    }
  }
function Contact() {
  const language=useSelector(state => state.language);
    window.addEventListener("scroll", reveal);
  return (
    <div id="contact" className="all3" >
    <div  className="container   ">
         <div className=" d-flex justify-content-start  my-3 none ">
      <h1 className=" ty" style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><TiContacts className="position-relative bi2" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">Contact</span></h1>
    </div>
    <br/>

    <div className="d-flex justify-content-start">
    <span className="showforbigscreen position-relative none" style={{left:"60px"}}>    <img src={show2} width="350" height="350"></img></span>

       <div className="bounce-in-top  mt-5  watch ms3  h-100  "  >
        <div className="card mt-5">
    <div className="card-header  text-center bg-primary text-white text-nowrap">
    <span  style={{color:'white',fontSize:'18px'}}><MdEmail size={20}/>Email:</span>  <br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} href="mailto:ayoubelouni6@gmail.com">ayoubelouni6@gmail.com</a></b><br/>
    <span   style={{color:'white',fontSize:'18px'}}><BsTelephoneFill size={18}/>Tel:</span><br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} href="tel:+21699656639">+216 99656639</a></b><br/>
    <span   style={{color:'white',fontSize:'18px'}}><IoLogoWhatsapp size={18}/>Whatsapp:</span><br/><b style={{color:'black'}}>+216 96876347</b><br/>
    <span   style={{color:'white',fontSize:'18px'}}><FaMapMarkerAlt size={18}/>Address:</span><br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} target="_blank" href="https://goo.gl/maps/LDVwpMREHuC94Md57">Sousse</a></b><br/>
    </div>
    </div>
    </div>
    <span className="showforbigscreen position-relative none mt-4 ms-5">    <img src={show} width="350" height="350"></img></span>
    </div>
    <div className=" d-none ms-5 mt-3  f  ">
    <h1 className="ms-5 ty" style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><TiContacts className="position-relative bi2" style={{left:'10.5px',bottom:'5px'}}size={27} /></div><span className="ms-2">Contact</span></h1>
    </div>
    <div className="showforbigscreen">
    <div  className="d-flex justify-content-center ms-5 mt-2 heartbeat none" ><a  className="button-three text-nowrap text-uppercase ps-3"role="button" href={CV} target="_blank" ><AiOutlineFile className="mb-1 me-1" />{(language===false)?"voir mon CV":"see my resume"}</a></div>
    </div>
  
    
    <div  className="d-flex justify-content-center ms-4 mt-1   " >
   <div className="reveal2  watch me-5 b h-100" style={{ width: "25em"}} >
    <div className="card text-center" >
      <div className="card-header  text-center  bg-primary text-white text-nowrap ">
      <span  style={{color:'white',fontSize:'18px'}}><MdEmail size={20}/>Email:</span>  <br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} href="mailto:ayoubelouni6@gmail.com">ayoubelouni6@gmail.com</a></b><br/>
      <span   style={{color:'white',fontSize:'18px'}}><BsTelephoneFill size={18}/>Tel:</span><br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} href="tel:+21699656639">+216 99656639</a></b><br/>
      <span   style={{color:'white',fontSize:'18px'}}><IoLogoWhatsapp size={18}/>Whatsapp:</span><br/><b style={{color:'black'}}>+216 96876347</b><br/>
      <span   style={{color:'white',fontSize:'18px'}}><FaMapMarkerAlt size={18}/>Address:</span><br/><b style={{color:'black'}}><a style={{textDecoration:'none',color:'black'}} target="_blank" href="https://goo.gl/maps/LDVwpMREHuC94Md57">Sousse</a></b><br/>
      </div>
      </div>
      </div>
      </div>
      <div  className="d-flex justify-content-center  mt-1   " >
     <div><div className=" mt-2"> <div  className="d-flex justify-content-center ms-1 mt-3 heartbeat shu d-none  " ><a  className="button-three text-nowrap text-uppercase shu ps-3"role="button" href={CV} target="_blank"  ><AiOutlineFile className="mb-1 me-1" />{(language===false)?"voir mon CV":"see my resume"}</a></div></div></div>
</div>
<div  className="d-flex justify-content-center  mt-4   " >
<span className="showformeduimandlittle position-relative " style={{left:"12px"}}>    <img src={show2} width="290" height="290"></img></span>
</div>


      <br/><br/><br/>
      <br/>
      <br/>
      <div className="d-flex justify-content-center h5 text-center">{(language===false)?"© Copyright 2023 Ouni Ayoub.Tous droits réservés.":"© Copyright 2023 Ouni Ayoub. All rights reserved."}</div>
      <br/>
      <br/>

    </div>
    </div>
  )
}

export default Contact

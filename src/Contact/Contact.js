import React from 'react'
import Icon from'./../Home/Icon'
import avatar from "./av.gif"
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
  function hide(){
    document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
  }
  const language=useSelector(state => state.language);
    window.addEventListener("scroll", reveal);
  return (
    <div id="contact" onClick={hide} className="all3 mt-5  position-relative " style={{bottom:'140px'}} >
      
    <div  className="container pt-2 none">
         <div className=" d-flex justify-content-center text-white  mt-5 my-3 none ">
      <h1 className=" ty" style={{color:' ',textTransform:'uppercase'}}><span className="ms-2">Contact<hr/></span></h1>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row">
      <div className="col-4 position-relative rightu">
      <h1 className='text-white w-50 text-nowrap'>
    Ayoub's Portfolio
    </h1>
    <div className="text-white" style={{fontSize:'18px'}}>

    {(language===false)?<>Merci de visiter le site de mon portfolio personnel<br/> Connectez-vous avec moi sur les réseaux sociaux.
<br/>Continue de monter 🚀 Connectez-vous avec moi sur le chat en direct !</>:<>    Thank you for visiting my personal portfolio<br/> website. Connect with me over socials.
    <br/>
 
Keep Rising 🚀 Connect with me over live chat!</> }

   
    </div>
      </div>
    <div className="col-4">
    <span className="d-flex justify-content-center position-relative mt-5 position-relative glisse" style={{bottom:'150px',left:'30px'}}>
    <img src={avatar}  className="mt-3 none  im imging" ></img>
    </span>

    </div>
   <div className="col-4 position-relative lefty" style={{bottom:'52px'}}>
   <div className="d-flex justify-content-end position-relative mt-5 position-relative" style={{right:'30px'}} >
    <h1 className="text-white text-nowrap"> Contact Info
</h1> 
</div>  
<div className="position-relative" >
<div className=" d-flex justify-content-end position-relative" >
<br/>

<div  style={{color:'#0256ff',fontSize:'18px'}}><MdEmail size={30}/></div>  <b style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} href="mailto:ayoubelouni6@gmail.com">ayoubelouni6@gmail.com</a></b><br/>
<br/>
</div>
<div className=" d-flex justify-content-end position-relative" style={{right:"85px"}}>
    
<div   style={{color:'#0256ff',fontSize:'18px'}}><BsTelephoneFill size={24}/></div><b  style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} href="tel:+21699656639">+216 99656639</a></b><br/>
<br/>
</div>
<div className=" d-flex justify-content-end position-relative" style={{left:"-153px"}}>
    
<div   style={{color:'#0256ff',fontSize:'18px'}}><FaMapMarkerAlt size={24}/></div><b style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} target="_blank" href="https://goo.gl/maps/LDVwpMREHuC94Md57">Sousse</a></b><br/>
<br/>
</div>
<div className="d-flex justify-content-end position-relative mt-5 position-relative" style={{left:"15px"}}>
<div className="position-relative" style={{bottom:'75px'}}>

<Icon />
</div>
</div>



</div>

   </div>
    
    

</div>
   

      <div className="d-flex justify-content-center h4 text-center text-white">{(language===false)?"© Copyright 2023 Ouni Ayoub.Tous droits réservés.":"© Copyright 2023 Ouni Ayoub. All rights reserved."}</div>
      <br/>
      <br/>
      <br/>

    </div>
    <div  className="container pt-2 d-none r">
         <div className=" d-flex justify-content-center text-white me-4  mt-5 my-3  ">
      <h1 className=" ty " style={{color:' ',textTransform:'uppercase'}}><span className="">Contact<hr/></span></h1>
    </div>
 <br/>
 <div className="">
      <div className="">
      <h1 className='d-flex justify-content-center text-white  text-nowrap'>
    Ayoub's Portfolio
    </h1>
    <div className="text-white d-flex justify-content-center text-center" style={{fontSize:'18px'}}>

    {(language===false)?<>Merci de visiter le site de mon portfolio personnel Connectez-vous avec moi sur les réseaux sociaux.
Continue de monter 🚀 Connectez-vous avec moi sur le chat en direct !</>:<>    Thank you for visiting my personal portfolio<br/> website. Connect with me over socials.
    <br/>
 
Keep Rising 🚀 Connect with me over live chat!</> }

   
    </div>
      </div>
    <div className="">
    <span className="d-flex justify-content-center position-relative mt-5 position-relative" style={{bottom:'50px',left:'13px'}}>
    <img src={avatar}  className="mt-3  img-fluid im" ></img>
    </span>

    </div>
 
    
    

</div>
    <div className=" position-relative" style={{bottom:'52px'}}>
   <div className="d-flex justify-content-center position-relative mt-5 position-relative ms-"  >
    <h1 className="text-white text-nowrap mb-4"> Contact Info
</h1> 
</div>  
<div className="position-relative" >
<div className=" d-flex justify-content-center position-relative" >
<br/>

<div  style={{color:'#0256ff',fontSize:'18px'}}><MdEmail size={30}/></div>  <b style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} href="mailto:ayoubelouni6@gmail.com">ayoubelouni6@gmail.com</a></b><br/>
<br/>
</div>
<div className=" d-flex justify-content-center position-relative" style={{right:"40px"}}>
    
<div   style={{color:'#0256ff',fontSize:'18px'}}><BsTelephoneFill size={24}/></div><b  style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} href="tel:+21699656639">+216 99656639</a></b><br/>
<br/>
</div>
<div className=" d-flex justify-content-center position-relative" style={{right:"73px"}}>
    
<div   style={{color:'#0256ff',fontSize:'18px'}}><FaMapMarkerAlt size={24}/></div><b style={{color:'white',fontSize:'18px'}} className="ms-2"><a style={{textDecoration:'none',color:'white'}} target="_blank" href="https://goo.gl/maps/LDVwpMREHuC94Md57">Sousse</a></b><br/>
<br/>
</div>
<div className="d-flex justify-content-center position-relative mt-5 position-relative" style={{right:"19px"}}>
<div className="position-relative" style={{bottom:'75px'}}>

<Icon />
</div>
</div>



</div>

   </div>
   
   

      <div className="d-flex justify-content-center h4 text-center text-white">{(language===false)?"© Copyright 2023 Ouni Ayoub.Tous droits réservés.":"© Copyright 2023 Ouni Ayoub. All rights reserved."}</div>
      <br/>
      <br/>
     

    </div>
    </div>
  )
}

export default Contact

import React from 'react'
import './Education.css'
import {FaBook} from 'react-icons/fa';
import { useSelector } from 'react-redux';
function reveal() {
  var reveals = document.querySelectorAll(".slide-in-left");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}
function reveal3() {
  var reveals = document.querySelectorAll(".bounce-in-top");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}

function reveal2() {
  var reveals = document.querySelectorAll(".slide-in-right");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}
function reveal4() {
  var reveals = document.querySelectorAll(".bounce-in-top2");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}
function Education() {
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", reveal2);
  window.addEventListener("scroll", reveal3);
  window.addEventListener("scroll", reveal4);
 
  const language=useSelector(state => state.language);
  return (
    <div id="education" className="container">
      <br className="dontshow"/>
      <br/>
       <div className="d-flex justify-content-start mt-3 none  ">
       <div>
       <h1  className="my-4 text-nowrap  t"style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><FaBook className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Éducation   ":" Education"}</h1>
      
    </div>
    </div>
    <div className="d-flex justify-content-center ms-4 mt-3 ">
    <>
    <div className="ms-5 l slide-in-left width" style={{width:'600px'}}>
      <div className="card    border border-1 border-dark" >
      <div style={{textOverflow:"hidden",backgroundColor:"#66cc99"}}  className=" py-4 card-header h4   text-white text-nowrap">
     <span className="ms-4"><span className="h2" style={{color:' white',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
      <span className="text-dark ms-4 h4">
      {(language===false)?"Cycle Préparatoire Intégré":" Integrated Preparatory Cycle"}</span><br/>
<span className="badge bg-dark ms-4 my-2"style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"SEPTEMBRE 2019 - JUIN 2021":" SEPTEMBER 2019 - JUNE 2021"}</span>
<br/> 


<span className="text-dark ms-4 h4 dnonemeduimscreen" style={{fontSize:'18px'}}> {(language===false)?<span>La pluparts des Matières mathématiques, physique et informatique</span>:<span >Studied Subjects in Maths, Physics and Computer Science.</span>}</span>
<span className="text-dark ms-4 h4 dnonetresgranscreen" style={{fontSize:'18px'}}> {(language===false)?<span>La pluparts des Matières mathématiques,<br/> physique et informatique</span>:<span >Studied Subjects in Maths, Physics<br/> and Computer Science.</span>}</span>

</span>
</div>
    </div>
    </div>
    
    <div className="ms-4 mt-4 l slide-in-right width" style={{width:'600px'}}>
      <div className="card   border border-1 border-dark ">
      <div style={{textOverflow:"hidden",backgroundColor:"#66cc99"}}  className=" py-4 card-header h4   text-white text-nowrap">
     <span className="ms-4"><span className="h2" style={{color:' white',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
      <span className="text-dark ms-4 h4">
      {(language===false)?"Diplôme d'ingénieur logiciel":" Software Engineering degree"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
<span className="badge bg-dark ms-4 my-2"style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"SEPTEMBRE 2021 - JUILLET 2024":" SEPTEMBER 2021 - JULLY 2024"}
</span>
<br/> 

<span className="text-dark  ms-4 h4 dnonemeduimscreen" style={{fontSize:'18px'}}> {(language===false)?<span>Études en génie logiciel.</span>:<span>Studied Software Engineering.</span>}</span>
<span className="text-dark  ms-4 h4 dnonetresgranscreen" style={{fontSize:'18px'}}> {(language===false)?<span>Études en génie logiciel.<br/><br/></span>:<span>Studied Software Engineering.<br/><br/></span>}</span>
</span></div>
  
    </div>
    </div>
    </>
    </div>
    <div className="  ms-5  mt-1 f ">
    <h1  className="mb-5 ms-5 text-nowrap t"style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><FaBook className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Éducation   ":" Education"}</h1>
    </div>
    <div className="d-flex justify-content-center ms-2 " style={{marginTop: "-20px" }}>
      <div className="bounce-in-top">
    <div className=" card   r  border border-1 border-dark "style={{ width: "277px"}} >
      <div style={{textOverflow:"hidden",backgroundColor:"#66cc99"}}  className=" py-4 card-header h4  text-center  text-white text-nowrap">
     <span className=""><span className="h2" style={{color:' white',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
      <span className="text-dark  h4">
      {(language===false)?"Cycle Préparatoire Intégré":" Integrated Preparatory Cycle"}</span><br/>
<span className="badge bg-dark my-2 "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"SEPTEMBRE 2019 - JUIN 2021":" SEPTEMBER 2019 - JUNE 2021"}</span>
<br/> 


<span className="text-dark  h4" style={{fontSize:'18px'}}> {(language===false)?<span>La pluparts des Matières<br/><span className="ms-1"> mathématiques physique</span><br/><span className="ms-2"> et informatique.</span></span>:<span className="ms-2">Studied Subjects in Maths<br/> <span className="ms-1" >Physics and Computer Science.</span></span>}</span></span></div>
  
  
    </div>
    </div>
    </div>
    <div className="d-flex justify-content-center ms-2 mt-3  ">
    <div className="bounce-in-top2">
    <div className="card   r  border border-1 border-dark " style={{ width: "277px"}}>
      <div style={{textOverflow:"hidden",backgroundColor:"#66cc99"}}  className=" py-4 card-header h4  text-center  text-white text-nowrap">
     <span className="ms-1 "><span className="h2 " style={{color:' white',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
      <span className="text-dark  h4 ">
      {(language===false)?"Diplôme d'ingénieur logiciel":" Software Engineering degree"}</span><br/>
<span className="badge bg-dark my-2 "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"SEPTEMBRE 2021 - JUILLET 2024":" SEPTEMBER 2021 - JULLY 2024"}
</span>
<br/> 

<span className="text-dark h4" style={{fontSize:'18px'}}> {(language===false)?"Études en génie logiciel.":"Studied Software Engineering."}
<br/> 

</span></span></div>
  
    
    </div>
    </div>
    </div>


    
    
    
    </div>
  )
}

export default Education

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
  function hide(){
    document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
  }
  const language=useSelector(state => state.language);
  return (
    <div id="education" onClick={hide} className="container position-relative " style={{bottom:'70px'}}>
      <br className="dontshow"/>
      <br/>
       <div className="d-flex justify-content-center mt-3 none  ">
       <div>
       <h1  className="my-4 text-nowrap  t"style={{color:' black',textTransform:'uppercase'}}>{(language===false)?"Éducation   ":" Education"}<hr/></h1>
      
    </div>
    </div>
    <div className="d-flex justify-content-center ms-4 mt-3 ">
    <>
    <div className="ms-5 l slide-in-left width" style={{width:'490px'}}>
      <div className="  bord " >
      <div style={{textOverflow:"hidden",}}  className=" py-4  h4  pe-4  text-dark text-nowrap">
     <span className="ms-4"><span className="h3" style={{color:' black',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
      <span className="text-dark ms-4 h5" style={{color:' black',fontWeight:'bold'}}>
      {(language===false)?"Cycle Préparatoire Intégré":" Integrated Preparatory Cycle"}</span><br/>
<span className="badge  ms-4 my-2"style={{color:' ',fontSize:'11px',backgroundColor:'#0256ff'}}>{(language===false)?"SEPTEMBRE 2019 - JUIN 2021":" SEPTEMBER 2019 - JUNE 2021"}</span>
<br/> 


<span className="text-dark ms-4 h4 dnonemeduimscreen" style={{fontSize:'15px',fontWeight:'bold'}}> {(language===false)?<span>La pluparts des Matières mathématiques, physique et informatique.</span>:<span >Studied Subjects in Maths, Physics and Computer Science.</span>}</span>
<span className="text-dark ms-4 h4 dnonetresgranscreen" style={{fontSize:'15px',fontWeight:'bold'}}> {(language===false)?<span>La pluparts des Matières mathématiques,<br/> physique et informatique.</span>:<span >Studied Subjects in Maths, Physics<br/> and Computer Science.</span>}</span>

</span>
</div>
    </div>
    </div>
    
    <div className="ms-4 mt-4 l slide-in-right width" style={{width:'490px'}}>
      <div className="bord">
      <div style={{textOverflow:"hidden"}}  className=" py-4 card-header h4   text-white text-nowrap">
     <span className="ms-4"><span className="h3" style={{color:' black',fontWeight:'bold'}}> ISSAT Sousse</span><br/>
     <span className="text-dark ms-4 h5" style={{color:' black',fontWeight:'bold'}}>
      {(language===false)?"Diplôme d'ingénieur en génie logiciel":" Software Engineering degree"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>
<span className="badge  ms-4 my-2"style={{color:' ',fontSize:'11px',backgroundColor:'#0256ff'}}>{(language===false)?"SEPTEMBRE 2021 - JUILLET 2024":" SEPTEMBER 2021 - JULLY 2024"}
</span>
<br/> 

<span className="text-dark  ms-4 h4 dnonemeduimscreen" style={{fontSize:'15px',fontWeight:'bold'}}> {(language===false)?<span>Études en génie logiciel.</span>:<span>Studied Software Engineering.</span>}</span>
<span className="text-dark  ms-4 h4 dnonetresgranscreen" style={{fontSize:'15px',fontWeight:'bold'}}> {(language===false)?<span>Études en génie logiciel.<br/><br/></span>:<span>Studied Software Engineering.<br/><br/></span>}</span>
</span></div>
  
    </div>
    </div>
    </>
    </div>
    <div className="  ms-5  mt-1 f ">
    <h1  className="my-4 ms-5 text-nowrap  t"style={{color:' black',textTransform:'uppercase'}}>{(language===false)?"Éducation   ":" Education"}<hr/></h1>

    </div>
    <div className="d-flex justify-content-center ms-2 " style={{marginTop: "-20px" }}>
      <div className="bounce-in-top">
      <div className=" l slide-in-left width r" style={{width:'278px'}}>
      <div className="  bord " style={{height:'177px'}} >
      <div style={{textOverflow:"hidden",}}  className=" py-4  h4   text-dark text-nowrap">
     <span className="ms-4 "><span className="h3 " style={{color:' black',fontWeight:'bold'}}> ISSAT Sousse</span>
     <br/>
     
      <span className="text-dark ms-4 " style={{fontSize:'18.5px',color:' black',fontWeight:'bold'}}>
      {(language===false)?"Cycle Préparatoire Intégré":" Integrated Preparatory Cycle"}</span><br/>
<span className="badge  ms-4 my-2"style={{color:' ',fontSize:'11px',backgroundColor:'#0256ff'}}>{(language===false)?"SEPTEMBRE 2019 - JUIN 2021":" SEPTEMBER 2019 - JUNE 2021"}</span>
<br/> 


<span className="text-dark ms-4 h4 dnonemeduimscreen" style={{fontSize:'13px',fontWeight:'bold' ,width:'160px'}}> {(language===false)?<span style={{width:'160px'}}>La pluparts des Matières mathématiques,<br/> <span className="ms-4">physique et informatique.</span></span>:<span style={{width:'160px'}} >Studied Subjects in Maths, Physics and<br/><span className="ms-4"> Computer Science.</span></span>}</span>

</span>
</div>
    </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div className="d-flex justify-content-center ms-2 " style={{marginTop: "-20px" }}>
      <div className="bounce-in-top">
      <div className=" l slide-in-left width r" style={{width:'280px'}}>
      <div className="  bord " style={{height:'177px'}} >
      <div style={{textOverflow:"hidden",}}  className=" py-4  h4   text-dark text-nowrap">
     <span className="ms-4 "><span className="h3 " style={{color:' black',fontWeight:'bold'}}> ISSAT Sousse</span>
     <br/>
     
      <span className="text-dark ms-4  " style={{fontSize:'18.5px',color:' black',fontWeight:'bold'}}>
      {(language===false)?<>Diplôme d'ingénieur en génie <br/><span className="ms-4">logiciel</span></>:" Software Engineering Degree"}</span><br/>
<span className="badge  ms-4 my-2"style={{color:' ',fontSize:'11px',backgroundColor:'#0256ff'}}>{(language===false)?"SEPTEMBRE 2021 - JUILLET 2024":" SEPTEMBER 2021 - JULLY 2024"}</span>
<br/> 


<span className="text-dark ms-4 h4 dnonemeduimscreen" style={{fontSize:'13px',fontWeight:'bold' ,width:'160px'}}> {(language===false)?"Études en génie logiciel.":"Studied Software Engineering."}</span>
</span>
</div>

    </div>
    </div>
    </div>
    </div>
  


    
    
    
    </div>
  )
}

export default Education

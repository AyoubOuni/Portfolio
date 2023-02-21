import React from 'react'
import './Experience.css'
import {FaLaptopCode, FaRegFileArchive} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import { useSelector } from 'react-redux';
function Experience() {
  function reveal2() {
    var reveals = document.querySelectorAll(".at-item");
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
  window.addEventListener("scroll", reveal2);
  function hide(){
    document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
  }
    const language=useSelector(state => state.language);
  return (
  <div id="experience" onClick={hide} className="container position-relative " style={{bottom:'70px'}}>
   
 <>
 <div className="pt-5 padding ">
       <div className="d-flex justify-content-center  mt-3  none  ">
      
       <h1  className="my-4 text-nowrap t"style={{textTransform:'uppercase'}}>{(language===false)?"Expérience   ":" Experience"}<hr/></h1>
    </div>
    <div className="none noning">
      <div className="">
      <div className="d-flex justify-content-center position-relative" >
      <div className=" bord-top">
<br/>
<br/>
<br/>
<h1  className="my-4  text-nowrap position-relative  t"style={{color:'#0256ff',textTransform:'uppercase',right:'28px',bottom:'60px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>


<div className="boxx sb2 position-relative at-item d-flex justify-content-start" style={{bottom:'140px',left:'50.5px'}}>
<div className=" l   "  >
<h5 className="  pt-1 text-nowrap position-relative" style={{fontWeight:'bold',right:'1px'}}>
Cybertrace Club  </h5>
  <div className="" style={{textAlign: 'start'}}>

    <p className=" ps-2 justify-content-start" >{(language===false)?<span style={{fontSize:"15.2px",fontWeight:"bold",right:'45px'}} className='position-relative'>Membre</span>
:
<span style={{fontSize:"15.2px",fontWeight:"bold",right:'45px'}} className='position-relative'>Member
 </span>}
 <br/>
{(language===false)? <div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'11px',right:'2px'}}>OCTOBRE 2021 - MAI 2022</div>: <div className="badge bg-dark mt-2 "style={{color:' white',fontSize:'11px'}}>OCTOBER 2021 - MAY 2022</div>}

 </p>

  </div>

</div>
</div>

<h1  className="my-4  text-nowrap position-relative  t"style={{color:'#0256ff',textTransform:'uppercase',right:'28px',bottom:'170px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>


<div className="boxx sb1 position-relative at-item" style={{bottom:'245px',right:'560.5px'}}>
<div className=" l   "  >
<h5 className="  pt-1 text-nowrap" style={{fontWeight:'bold',textAlign: 'start',right:'1px'}}>
Whitecape Technologies
 </h5>
  <div className="beg" style={{textAlign: 'start'}}>

    <p className=" ps-2">{(language===false)?<span className="beg" style={{fontSize:"15.2px",fontWeight:"bold",textAlign: 'start',right:'155px'}} className='position-relative'>Développeur Web | Stage
</span>
:
<span className="beg" style={{fontSize:"15.2px",fontWeight:"bold",textAlign: 'start',right:'150px'}} className='position-relative'>Web Developer | Internship
 </span>}
 <br/>
 {(language===false)?<div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'11px',textAlign: 'start',right:'169px'}}>JUILLET 2022 - AOUT 2022</div>:<div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'11px',textAlign: 'start',right:'173px'}}> JULY 2022 - AUGUST 2022</div>}

 </p>

  </div>

</div>
</div>

<h1  className="my-4  text-nowrap position-relative  t"style={{color:'#0256ff',textTransform:'uppercase',right:'28px',bottom:'260px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>


<div className="boxx sb2 position-relative at-item d-flex justify-content-start" style={{bottom:'340px',left:'50.5px'}}>
<div className=" l   "  >
<h5 className="  pt-1 text-nowrap" style={{fontWeight:'bold',right:'1px'}}>
{(language===false)?<div className="position-relative" style={{left:'4px'}}>
Travailleur indépendant
</div>
:<div className="position-relative" style={{right:'8px'}}>
Self Employed
</div>}
 </h5>
  <div className="">
    <p className=" ps-2 ">{(language===false)?<span className="position-relative" style={{fontSize:"15.2px",textAlign: 'start',right:'25px',fontWeight:"bold"}}>Développeur Full Stack
</span>
:
<span className="position-relative"   style={{fontSize:"15.2px",fontWeight:"bold",right:'6px'}}>Full Stack Developer
 </span>}
 <br/>
 {(language===false)?<div className="badge bg-dark mt-2 position-relative "style={{color:' white',fontSize:'11px',textAlign: 'start',right:'29px'}}>NOVEMBRE 2021 - Présent</div>:<span><div className="badge bg-dark mt-2 position-relative "style={{color:' white',fontSize:'11px',textAlign: 'start',right:'4px'}}>NOVEMBER 2022 - Present</div></span>}
 

 </p>

  </div>

</div>
</div>
      </div>
      </div>
      </div>
  

</div>

    </div>
    <div className=" d-none ms-5   f ">
    <h1  className="my-4 ms-5 text-nowrap t"style={{textTransform:'uppercase'}}>{(language===false)?"Expérience   ":" Experience"}<hr/></h1>
    </div>
    <div className='d-flex justify-content-center d-none r showing3 '>
    <div className="">
      <div className="">
      <div className="d-flex justify-content-center righty ryt" style={{marginLeft:'173px'}}>
      <div className=" bord-top" style={{height:'530px'}}>
<br/>
<br/>
<br/>
<h1  className="my-4  text-nowrap position-relative righting  t"style={{color:'#0256ff',textTransform:'uppercase',right:'41px',bottom:'60px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>


<div className="boxx  position-relative at-item d-flex justify-content-start" style={{height:'93px',bottom:'100px',right:'100.5px'}}>
<div className="    "  >
<div className="  pt-1 position-relative text-nowrap" style={{fontWeight:'bold',left:'20px',fontSize:'17px'}}>
Cybertrace Club  </div>
  <div className="" style={{textAlign: 'start'}}>

    <p className=" ps-2 justify-content-start" >{(language===false)?<span style={{fontSize:"13.2px",fontWeight:"bold",left:'19px'}} className='position-relative'>Membre</span>
:
<span style={{fontSize:"13.2px",fontWeight:"bold",left:'19px'}} className='position-relative'>Member
 </span>}
 <br/>
{(language===false)? <div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',left:'19px'}}>OCTOBRE 2021 - MAI 2022</div>: <div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',left:'19px'}}>OCTOBER 2021 - MAY 2022</div>}

 </p>

  </div>

</div>
</div>

<h1  className="my-4  text-nowrap position-relative righting  t"style={{color:'#0256ff',textTransform:'uppercase',right:'41px',bottom:'137px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>


<div className="boxx  position-relative at-item" style={{height:'95px',bottom:'177px',right:'100.5px'}}>
<div className="    "  >
<h5 className="  pt-1 position-relative text-nowrap" style={{fontWeight:'bold',right:'4px',fontSize:'17px'}}>
Whitecape Technologies
 </h5>
  <div className="beg" style={{textAlign: 'start'}}>

    <p className=" ps-2">{(language===false)?<span className="" style={{fontSize:"13.2px",fontWeight:"bold",textAlign: 'start',right:'5px'}} className='position-relative'>Développeur Web | Stage
</span>
:
<span  style={{fontSize:"13.2px",fontWeight:"bold",textAlign: 'start',right:'8px'}} className='position-relative '>Web Developer | Internship
 </span>}
 <br/>
 {(language===false)?<div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',textAlign: 'start',right:'6px'}}>JUILLET 2022 - AOUT 2022</div>:<div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',textAlign: 'start',right:'6px'}}> JULY 2022 - AUGUST 2022</div>}

 </p>

  </div>

</div>
</div>
<h1  className="my-4  text-nowrap position-relative righting t"style={{color:'#0256ff',textTransform:'uppercase',right:'41px',bottom:'210px'}}><div className="  border border-2 border-dark bg-white rounded-circle w d-inline-block position-relative shadow-lg   rounded w"  style={{color:'#0256ff',textTransform:'uppercase'}}><MdWork className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div></h1>
<div className="boxx  position-relative at-item d-flex justify-content-start" style={{height:'93px',bottom:'250px',right:'100.5px'}}>
<div className="    "  >
<div className="  pt-1 position-relative " style={{fontWeight:'bold',right:'4px',fontSize:'17px'}}>
{(language===false)?<div className="text-nowrap position-relative" style={{left:'4px'}}>
Travailleur indépendant
</div>
:<div className="position-relative" style={{left:'29px'}}>
Self Employed
</div>}  </div>
  <div className="" style={{textAlign: 'start'}}>

    <p className=" ps-2 justify-content-start" >{(language===false)?<span style={{fontSize:"13.2px",fontWeight:"bold",right:'3px'}} className='position-relative'>Développeur Full Stack</span>
:
<span style={{fontSize:"13.2px",fontWeight:"bold",left:'22px'}} className='position-relative'>Full Stack Developer
 </span>}
 <br/>
{(language===false)? <div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',right:'2.5px'}}>NOVEMBRE 2021 - Présent</div>: <div className="badge bg-dark mt-2 position-relative"style={{color:' white',fontSize:'9px',left:'22px'}}>NOVEMBER 2022 - Present</div>}

 </p>

  </div>

</div>
</div>




      </div>
      </div>
      </div>
  

</div>

 </div>

    </>
    <br/>
    </div>
   
  )
}

export default Experience

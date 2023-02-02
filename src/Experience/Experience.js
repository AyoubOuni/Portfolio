import React from 'react'
import './Experience.css'
import whitecape from "./withecape.jpg"
import cyber from "./cyber.png"
import {FaLaptopCode} from 'react-icons/fa';
import { useSelector } from 'react-redux';
function Experience() {

    const language=useSelector(state => state.language);
  return (
  <div id="experience" className="container">
   
 <>
 <div className="pt-5 padding ">
       <div className="d-flex justify-content-start  mt-3  none  ">
      
       <h1  className="my-4 text-nowrap t"style={{color:'#ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n"  ><FaLaptopCode className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Expérience   ":" Experience"}</h1>
    </div>
    <div className="">
    <div className='d-flex justify-content-center marg_left2 '>
    <div className="card l text-center border border-1 border-dark "  >
  <h3 className="card-header  py-3 bg-primary text-nowrap" style={{fontWeight:'bold'}}>
  Whitecape Technologies
  </h3>
  <div className="card-body">
    <h5 className="card-title"><img src={whitecape} width="150" height="150"style={{borderRadius:'50%'}} /></h5>
    <div className="badge bg-dark "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"JUILLET 2022 - AOUT 2022":" JULY 2022 - AUGUST 2022"}</div>

    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>j'ai participé comme un stagiaire(stage ouvrier) <br/>dans une tache de Migration Bootstrap d'une <br/>version 3 vers une version 5 d'une application web.</span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>I participated as an intern (worker internship)<br/> in a Bootstrap Migration task from version 3 to<br/> version 5 of a web application.</span>}</p>
  </div>
  
</div>
    <div className="card l text-center mx-4  border border-1 border-dark" >
  <h3 className="card-header  py-3 bg-primary text-nowrap"style={{fontWeight:'bold'}}>
  Cybertrace Club  </h3>
  <div className="card-body">
    <h5 className="card-title"><img src={cyber} width="150" height="150"style={{borderRadius:'50%'}} /></h5>
    <div className="badge bg-dark "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"OCTOBRE 2021 - MAI 2022":" OCTOBER 2021 - MAY 2022"}</div>

    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>j'ai participé  comme membre dans le club cybertrace <br/> security et j'ai assister tous les session des formation.</span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>I participated as a member in the cybertrace<br/> security club and I attended all training sessions.</span>}</p>
  </div>
 
</div>
</div>
</div>

    </div>
    <div className=" d-none ms-5   f ">
    <h1  className="mb-4 ms-5 text-nowrap t"style={{color:'#ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n"  ><FaLaptopCode className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?"Expérience   ":" Experience"}</h1>
    </div>
    <div className='d-flex justify-content-center '>
    <div className="card r text-center  border border-1 border-dark " style={{ width: "328px"}}>
  <h3 className="card-header  py-3 bg-primary text-nowrap" style={{fontWeight:'bold'}}>
  Whitecape Technologies
  </h3>
  <div className="card-body">
    <h5 className="card-title"><img src={whitecape} width="150" height="150"style={{borderRadius:'50%'}} /></h5>
    <div className="badge bg-dark "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"JUILLET 2022 - AOUT 2022":" JULY 2022 - AUGUST 2022"}</div>

    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"16.2px",fontWeight:"bold"}} >j'ai participé comme un stagiaire(stage ouvrier) dans une tache de Migration Bootstrap d'une version 3 vers  une version 5 d'une application web.</span>
:
<span style={{fontSize:"16.2px",fontWeight:"bold"}}>I participated as an intern (worker internship) in a Bootstrap Migration task from version 3 to version 5 <br/> of a web application.</span>}</p>
  </div>
</div>
</div>
<div className='d-flex justify-content-center mt-4'>
<div className="card r text-center border border-1 border-dark " style={{ width: "328px"}}>
  <h3 className="card-header  py-3 bg-primary text-nowrap" style={{fontWeight:'bold'}}>
  Cybertrace Club  </h3>
  <div className="card-body">
    <h5 className="card-title"><img src={cyber} width="150" height="150"style={{borderRadius:'50%'}} /></h5>
    <div className="badge bg-dark "style={{color:' #ff6600',fontSize:'12px'}}>{(language===false)?"OCTOBRE 2021 - MAI 2022":" OCTOBER 2021 - MAY 2022"}</div>

    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"16.2px",fontWeight:"bold"}}>j'ai participé  comme membre dans le club cybertrace  security et j'ai assister<br/> tous les session des formation.</span>
:
<span style={{fontSize:"16.2px",fontWeight:"bold"}}>I participated as a member in the cybertrace security club and<br/> I attended all training sessions.</span>}</p>
  </div>
 
</div>
</div>

    </>
    </div>
   
  )
}

export default Experience

import React from 'react'
import { useSelector } from 'react-redux';
import {BsFilePdfFill,BsGithub}  from 'react-icons/bs';
import {RiFolderSettingsFill}  from 'react-icons/ri';
import './Projects.css'
import file from "./APPLICATION DE LOCATION DES VOITURES.pdf"
function Projects() {
    const language=useSelector(state => state.language);
  return (
    
      <div id="projects" className="container" >
    <div className="py-4 padding" >
     
       <div className=" d-flex justify-content-start     mt-3  none ">
       <div>
       <h1  className="my-4  text-nowrap   t"style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><RiFolderSettingsFill className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?" Projets   ":" Projects"}</h1>
      
    </div>
    </div>

    <div className='d-flex justify-content-center '>
    <div className="card l text-center ms-4 bord position-relative widthbox" style={{backgroundColor:"#66cc99"}} >
  <div className="card-body">
    <h2 className="card-title title grand_text">{(language===false)?" Gestion de location des voitures   ":" Management of car rental"}</h2>
   
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>Cette application permet de gérer la location des voitures 
     pour un client donné. Il y a un seul acteur  qui est l’Admin .j'ai travaillé avec JavaFX qui permet de créer des interfaces graphique pour des applications Java.</span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>This application allows you to manage car rental for  a given client. There is only one actor that is the Admin
who can manage customers and cars.I worked with JavaFX which allows to create graphical interfaces for desktop Java applications.</span>}</p>
<br/>
<br/>
<div className=" d-flex justify-content-center">
<div className="position-absolute " style={{bottom: "21.4px"}}>

<a href={file}  target="_blank" ><BsFilePdfFill className="text-danger" size={30}/></a>
<a href="https://github.com/AyoubOuni/Gestion-de-location-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
  </div>
  </div>
  </div>
</div>
    <div className="card l text-center ms-4 bord position-relative widthbox" style={{backgroundColor:"#66cc99"}}>
  <div className="card-body">
    <h2 className="card-title border-3 title grand_text" >{(language===false)?" Des mini projets React JS   ":" Mini projects with React JS"}</h2>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>J'ai fait des mini projets avec React JS comme calculatrice et To do list en utilisant Redux avec plugin yup pour tester la validation des inputs. </span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>I did mini projects with React JS as a calculator and  To do list using Redux with yup plugin to test the validation of inputs. </span>}</p>
<div className=" d-flex justify-content-center">
<div className="position-absolute " style={{bottom: "21.4px",left: "45%"}}>
<a href="https://github.com/AyoubOuni/Mini-projects-with-React-JS.git" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
</div>
</div>
  </div>
</div>
    <div className="card l text-center ms-4 bord position-relative widthbox" style={{backgroundColor:"#66cc99"}}>
  <div className="card-body">
    <h2 className="card-title border-3 title grand_text" >{(language===false)?"Application web pour la vente des voitures   ":" Web application for selling cars"}</h2>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>Cette application permet de gérer la vente des voitures 
     . Il y a un deux acteur  qui sont l’Admin  et les internautes .j'ai travaillé avec React Js et Bootstrap cote front-end et php cote back-end.</span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>This application manage the sale of cars
      . There are two actors who are the Admin and the Internet users. I used React Js and Bootstrap on the front-end side and php on the back-end side. </span>}</p>
      <br/>
      <div className=" d-flex justify-content-center">
<div className="position-absolute " style={{bottom: "21.4px"}}>
<a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
  </div>
</div>
  </div>
</div>

</div>
<br/>
<div className="d-flex justify-content-start">

<div className="card l text-center ms-4 bord position-relative widthbox2" style={{backgroundColor:"#66cc99"}}>
  <div className="card-body">
    <h2 className="card-title border-3 title grand_text" >{(language===false)?"application de chat":" Real Time App Chat"}</h2>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"18px",fontWeight:"bold"}}>Cette application permet de gérer la discussion entre les internautes .
     j'ai travaillé avec React Js et Bootstrap cote Front-end et Node Js , Express Js et Socket.IO cote Back-end.</span>
:
<span style={{fontSize:"18px",fontWeight:"bold"}}>This application allows you to manage the discussion between Internet users.
 I worked with React Js and Bootstrap Front-end side and Node Js , Express Js and Socket.IO Back-end side. </span>}</p>
      <br/>
      <div className=" d-flex justify-content-center">
<div className="position-absolute " style={{bottom: "21.4px"}}>
<a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
  </div>
</div>
  </div>
</div>

</div>
      
       <div className=" d-none ms-5   f ">
       <h1  className=" mb-4 ms-5 t"style={{color:' #ff6600',textTransform:'uppercase'}}><div className="  border border-2 rounded-circle w d-inline-block position-relative shadow-lg  bg-body rounded n w" ><RiFolderSettingsFill className="position-relative bi" style={{left:'10.5px',bottom:'5px'}}size={27} /></div>{(language===false)?" Projets   ":" Projects"}</h1>
    </div>
<div className='d-flex justify-content-center '>
    <div>
    <div className="card r text-center bord" style={{backgroundColor:"#66cc99",width: "328px"}} >
  <div className="card-body">
    <h5 className="card-title title text-nowrap grand_text">{(language===false)?" Gestion de location des voitures   ":" Management of car rental"}</h5>
   
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la location des voitures 
     pour un client donné. Il y a un seul acteur  qui est l’Admin qui peut gérer les clients et les
voitures.j'ai travaillé avec JavaFX qui permet de créer des interfaces graphique pour des applications Java.</span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application allows you to manage car rental for  a given client. There is only one actor that is the Admin
who can manage customers and cars.I worked with JavaFX which allows to create graphical interfaces for desktop Java applications.</span>}</p>
<a href={file}  target="_blank"  ><BsFilePdfFill className="text-danger" size={30}/></a>
<a href="https://github.com/AyoubOuni/Gestion-de-location-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
  </div>
</div>
</div>
</div>
<br/>
<div className='d-flex justify-content-center '>
    <div className="card r text-center  bord position-relative"  style={{backgroundColor:"#66cc99",width: "328px"}}>
  <div className="card-body">
    <h5 className="card-title border-3 title grand_text text-nowrap" >{(language===false)?" Des mini projets React JS   ":" Mini projects with React JS"}</h5>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>J'ai fait des mini projets avec React JS comme calculatrice et To do list en utilisant Redux avec plugin yup pour tester la validation des inputs. </span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>I did mini projects with React JS which calculator and To do list using Redux with yup plugin to test the validation of inputs</span>}</p>
<br/>
<div className="position-absolute " style={{bottom: "8.4px",left: "45%"}}>
<a href="https://github.com/AyoubOuni/Mini-projects-with-React-JS.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
</div>
  </div>
</div>
</div>
<br/>
<div className='d-flex justify-content-center '>
    <div className="card r text-center  bord position-relative"  style={{backgroundColor:"#66cc99",width: "328px"}}>
  <div className="card-body">
    <h5 className="card-title border-3 title grand_text " >{(language===false)?"Application web pour la vente des voitures   ":" Web application for selling cars"}</h5>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la vente des voitures 
     . Il y a un deux acteur  qui sont l’Admin  et les internautes .j'ai travaillé avec React Js et Bootstrap cote front-end et php cote back-end. </span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application manage the sale of cars
      . There are two actors who are the Admin and the Internet users. I used React Js and Bootstrap on the front-end side and php on the back-end side.</span>}</p>
     <br/>
      <div className="position-absolute " style={{bottom: "8.4px",left: "40%"}}>
<a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
  </div>
  </div>
</div>
</div>
<br/>

<div className="d-flex justify-content-center">
<div className="card r text-center  bord position-relative"  style={{backgroundColor:"#66cc99",width: "328px"}}>
  <div className="card-body">
    <h5 className="card-title border-3 title grand_text " >{(language===false)?"application de chat":"Real Time App Chat"}</h5>
    <p className="card-text mt-3">{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la discussion entre les internautes .
     j'ai travaillé avec React Js et Bootstrap cote Front-end et Node Js , Express Js et Socket.IO cote Back-end. </span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application allows you to manage the discussion between Internet users.
 I worked with React Js and Bootstrap Front-end side and Node Js , Express Js and Socket.IO Back-end side.</span>}</p>
     <br/>
      <div className="position-absolute " style={{bottom: "8.4px",left: "40%"}}>
<a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
  </div>
  </div>
</div>
</div>

<br className="dontshow"/>
<br className="dontshow"/>
<br />
    </div>
    </div>
  )
}

export default Projects

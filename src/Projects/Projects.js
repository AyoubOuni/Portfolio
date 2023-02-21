import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {BsFilePdfFill,BsGithub}  from 'react-icons/bs';
import {RiFolderSettingsFill}  from 'react-icons/ri';
import {GrLinkNext}  from 'react-icons/gr';
import {BiShow}  from 'react-icons/bi';
import './Projects.css'
import chatting from './chatting.PNG'

import CoverFlow from 'coverflow-react';
import rentalcar from './rentalcar.PNG'
import car_vente from './cars_user.PNG'
import weather_app from './weather_app.PNG'

import sound from "./slide.mp3";
import ReactAudioPlayer from 'react-audio-player';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import file from "./APPLICATION DE LOCATION DES VOITURES.pdf"
function Projects() {
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => swiper.slideTo(index);
useEffect(()=>{
console.log(swiper);
},[swiper])
    const language=useSelector(state => state.language);
    const lance=()=>{
      var s=document.getElementById('song');
  s.play();
    }
    function hide(){
      document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
    }
  return (
    
      <div id="projects"  className="container position-relative yub " style={{bottom:'80px'}} onClick={hide}>
        <div >
    <div className="padding none pt-4" >
     
       <div className=" d-flex justify-content-center     mt-3  none ">
       <div>
       <h1  className="my-4  text-nowrap   t"style={{color:' black',textTransform:'uppercase'}}>{(language===false)?" Projets   ":" Projects"}<hr/></h1>
      
    </div>
    </div>
   


    <ReactAudioPlayer
  src={sound}
  className="d-none"
  id='song'
  controls
/>
    <>
    
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        onSlideChange={lance}

        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide style={{width: '460px', height: '100%'}}>
          <div className="card ">
          <img src={rentalcar} />
          <h3 className="text-dark mt-3 ms-2">{(language===false)?" Gestion de location des voitures   ":" Management of car rental"}</h3>
          <div className="d-flex justify-content-end position-relative" style={{bottom: '40px',right:'18px'}}>
          <a href="https://github.com/AyoubOuni/Gestion-de-location-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
          </div>
          <p className="text-muted position-relative" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la location des voitures 
     pour un client donné. Il y a un seul acteur  qui est l’Admin qui peut gérer les clients et les
voitures.j'ai travaillé avec JavaFX qui permet de créer des interfaces graphique pour des applications Java.</span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application allows you to manage car rental for  a given client. There is only one actor that is the Admin
who can manage customers and cars.I worked with JavaFX which allows to create graphical interfaces for desktop Java applications.</span>}</p>


          </div>
        </SwiperSlide>
       
        <SwiperSlide style={{width: '460px', height: '100%'}}>
          <div className="card ">
          <img src={car_vente} />
          <h3 className="text-dark mt-3 ms-2">{(language===false)?"Application web pour la vente des voitures   ":" Web application for selling cars"}</h3>
          <div className="d-flex justify-content-end position-relative" style={{bottom: '40px',right:'18px'}}>
          <a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>

          </div>
          <p className="text-muted position-relative px-2" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la vente des voitures 
     . Il y a un deux acteur  qui sont l’Admin  et les internautes .j'ai travaillé avec React Js et Bootstrap cote front-end et php cote back-end.</span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application manage the sale of cars
      . There are two actors who are the Admin and the Internet users. I used React Js and Bootstrap on the front-end side and php on the back-end side. </span>}</p>


          </div>
        </SwiperSlide>
       
        <SwiperSlide style={{width: '460px', height: '100%'}}>
          <div className="card ">
          <img src={chatting} />
          <h3 className="text-dark mt-3 ms-2">{(language===false)?"Application de Chat":"Real Time App Chat"}</h3>
          <div className="d-flex justify-content-end position-relative" style={{bottom: '40px',right:'18px'}}>
          <a href="https://github.com/AyoubOuni/Real-Time-App-Chat" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
          </div>
          <p className="text-muted position-relative px-2" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application permet de gérer la discussion entre les internautes .
     j'ai travaillé avec React Js et Bootstrap cote Front-end et Node Js , Express Js et Socket.IO cote Back-end. </span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application allows you to manage the discussion between Internet users.
 I worked with React Js and Bootstrap Front-end side and Node Js , Express Js and Socket.IO Back-end side.</span>}</p>
     <br/>

          </div>
        </SwiperSlide>
       
        <SwiperSlide style={{width: '460px', height: '100%'}}>
          <div className="card ">
          <img src={weather_app} />
          <h3 className="text-dark mt-3 ms-2" style={{}}>{(language===false)?"Application Météo   ":" Weather App"}</h3>
          <div className="d-flex justify-content-end position-relative" style={{bottom: '40px',right:'18px'}}>
          <a href="http://ayoub-weather-app.epizy.com/?i=1" className='me-2'  target="_blank"><BiShow className="ms-2 text-dark"size={30}/></a>
          <a href="https://github.com/AyoubOuni/Weather-App"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
          </div>
          <p className="text-muted position-relative px-2" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"15px",fontWeight:"bold"}}>Cette application affiche la météo, l'heure actuelle, l'heure du coucher et du lever du soleil et le drapeau du pays en filtrant selon le nom de la ville entré par l'utilisateur.J'ai travaillé avec React Js.</span>
:
<span style={{fontSize:"15px",fontWeight:"bold"}}>This application displays weather, current time, Sunset and sunrise times and country flag by filtering according to the city name entered by the user.I worked with React Js.</span>}</p>


          </div>
        </SwiperSlide>
     
        <SwiperSlide style={{width: '460px', height: '500px'}}>
          <a href="https://github.com/AyoubOuni" target="_blank" style={{textDecoration:'none',textAlign:'center'}}>
          <div className="card ">
          <h3 className="text-dark mt-3 au ms-2 ">{(language===false)?"Voir plus   ":" See More"}<GrLinkNext  className="ms-1" size={40}/></h3>
        
          </div>
          </a>
        </SwiperSlide>
       
        
      </Swiper>
       
      
    </>



<br className="dontshow"/>
<br className="dontshow"/>
<br />
<br />
<br />
<br />
    </div>
    </div>
    <div className="py-4 padding  d-none r  position-relative " style={{bottom:'100px'}} >
     
       <div className='d-flex justify-content-center ms-5 d-none ms-5  mt-3 f' >
       <h1  className="my-4  text-nowrap   "style={{color:' black',textTransform:'uppercase'}}>{(language===false)?" Projets   ":" Projects"}<hr/></h1>
      
    </div>
   

  
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        onSlideChange={lance}
        style={{width: '300px'}}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       

    <div className='d-flex justify-content-center  position-relative ' >
    <br/>
    
        <SwiperSlide style={{width: '300px'}}>
          <div className="card " >
          <img src={rentalcar} style={{width: '100%', height: '190px'}}/>
          <h5 className="text-dark mt-3 ms-2 text-nowrap">{(language===false)?" Gestion de location des voitures   ":" Management of car rental"}</h5>
          <div className="d-flex justify-content-center position-relative" style={{bottom: '-1px'}}>
          <a href="https://github.com/AyoubOuni/Gestion-de-location-des-voitures.git"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
          </div>
          <p className="text-muted mt-4 position-relative" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"12px",fontWeight:"bold"}}>Cette application permet de gérer la location des voitures 
     pour un client donné. Il y a un seul acteur  qui est l’Admin qui peut gérer les clients et les
voitures.j'ai travaillé avec JavaFX qui permet de créer des interfaces graphique pour des applications Java.</span>
:
<span style={{fontSize:"12px",fontWeight:"bold"}}>This application allows you to manage car rental for  a given client. There is only one actor that is the Admin
who can manage customers and cars.I worked with JavaFX which allows to create graphical interfaces for desktop Java applications.</span>}</p>


          </div>
        </SwiperSlide>
       
       </div>

       <br/>
    <div className='d-flex justify-content-center  position-relative ' >
    <br/>
  
       
        <SwiperSlide style={{width: '300px'}}>
        <div className="card ">
          <img src={car_vente} style={{width: '100%', height: '190px'}}/>
          <h5 className="text-dark mt-3 ms-2">{(language===false)?"Application web pour la vente des voitures   ":" Web application for selling cars"}</h5>
          <div className="d-flex justify-content-center position-relative" style={{bottom: '-1px'}}>
          <a href="https://github.com/AyoubOuni/Application-web-pour-la-vente-des-voitures.git" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>

          </div>
          <p className="text-muted position-relative px-2 mt-4" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"12px",fontWeight:"bold"}}>Cette application permet de gérer la vente des voitures 
     . Il y a un deux acteur  qui sont l’Admin  et les internautes .j'ai travaillé avec React Js et Bootstrap cote front-end et php cote back-end.</span>
:
<span style={{fontSize:"12px",fontWeight:"bold"}}>This application manage the sale of cars
      . There are two actors who are the Admin and the Internet users. I used React Js and Bootstrap on the front-end side and php on the back-end side. </span>}</p>


          </div>
        </SwiperSlide>
       
       </div>

       <br/>
    <div className='d-flex justify-content-center  position-relative ' >
    <br/>
  
       
        <SwiperSlide style={{width: '300px'}}>
        <div className="card " >
          <img src={chatting} style={{width: '100%', height: '190px'}} />
          <h5 className="text-dark mt-3 ms-2">{(language===false)?"Application de Chat":"Real Time App Chat"}</h5>
          <div className="d-flex justify-content-center position-relative" style={{bottom: '-1px'}}>
          <a href="https://github.com/AyoubOuni/Real-Time-App-Chat" target="_blank"><BsGithub className="ms-2 text-dark"size={31}/></a>
          </div>
          <p className="text-muted position-relative px-2 mt-4" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"12px",fontWeight:"bold"}}>Cette application permet de gérer la discussion entre les internautes .
     j'ai travaillé avec React Js et Bootstrap cote Front-end et Node Js , Express Js et Socket.IO cote Back-end. </span>
:
<span style={{fontSize:"12px",fontWeight:"bold"}}>This application allows you to manage the discussion between Internet users.
 I worked with React Js and Bootstrap Front-end side and Node Js , Express Js and Socket.IO Back-end side.</span>}</p>
     <br/>

          </div>
        </SwiperSlide>
       
       </div>

       <br/>
    <div className='d-flex justify-content-center  position-relative ' >
    <br/>
  
       
        <SwiperSlide style={{width: '300px'}}>
        <div className="card ">
          <img src={weather_app} style={{width: '100%', height: '190px'}} />
          <h5 className="text-dark mt-3 ms-2" style={{}}>{(language===false)?"Application Météo   ":" Weather App"}</h5>
          <div className="d-flex justify-content-center position-relative" style={{bottom: '-1px'}}>
          <a href="http://ayoub-weather-app.epizy.com/?i=1" className='me-2'  target="_blank"><BiShow className="ms-2 text-dark"size={30}/></a>
          <a href="https://github.com/AyoubOuni/Weather-App"  target="_blank"><BsGithub className="ms-2 text-dark"size={30}/></a>
          </div>
          <p className="text-muted position-relative px-2 mt-4" style={{bottom:'20px',padding:'5px'}}>{(language===false)?<span style={{fontSize:"12px",fontWeight:"bold"}}>Cette application affiche la météo, l'heure actuelle, l'heure du coucher et du lever du soleil et le drapeau du pays en filtrant selon le nom de la ville entré par l'utilisateur.J'ai travaillé avec React Js.</span>
:
<span style={{fontSize:"12px",fontWeight:"bold"}}>This application displays weather, current time, Sunset and sunrise times and country flag by filtering according to the city name entered by the user.I worked with React Js.</span>}</p>


          </div>
        </SwiperSlide>
       
       </div>
       <br/>
    <div className='d-flex justify-content-center  position-relative ' >
    <br/>
  
    <SwiperSlide style={{width: '300px',height:'100px'}}>

          <a href="https://github.com/AyoubOuni" className='position-relative' target="_blank" style={{textDecoration:'none',textAlign:'center'}}>
          <div className="card" >
          <h5 className="text-dark text-center mt-3 au ms-2 position-relative ">{(language===false)?"Voir plus   ":" See More"}<GrLinkNext  className="ms-1" size={40}/></h5>
        
          </div>
          </a>
        </SwiperSlide>
       
       
       </div>
      

     
     
       
        
       
      






</Swiper>
    </div>
    
    </div>
  )
}

export default Projects

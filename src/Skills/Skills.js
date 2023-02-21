import React from 'react'
import './Skills.css'
import { useSelector } from 'react-redux';
import {BiCodeAlt} from 'react-icons/bi';
import {FaReact,FaCss3Alt,FaJava,FaBootstrap,FaWordpress,FaPython,FaNodeJs}  from 'react-icons/fa';
import {AiFillHtml5,AiFillGithub}  from 'react-icons/ai';
import {ImGit}  from 'react-icons/im';
import {FiFigma}  from 'react-icons/fi';
import {GrMysql}  from 'react-icons/gr';
import {SiJavascript,SiRedux,SiPhp,SiExpress}  from 'react-icons/si';
import Bar_of_skills from './Bar_of_skills'
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active3");
    } else {
      reveals[i].classList.remove("active3");
    }
  }
}
function Skills() {
  function hide(){
    document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
  }
  window.addEventListener("scroll", reveal);

  const language=useSelector(state => state.language);


  return (
   
    <div id="skills" onClick={hide}  className='all2   position-relative ' style={{bottom:'30px',boxSizing:'unset'}}>
      <div className="container pt-4">
    <div className="pt-2 padding2  position-relative " style={{bottom:'8px'}} >
        <div className="d-flex justify-content-center   my-3  none ">
        <h1 className="mt-4  text-nowrap t " style={{color:' white',textTransform:'uppercase'}}>{(language===false)?"Mes  Compétences  ":" My Skills"}<hr /></h1>
    </div>
    <div className=" d-none ms-5  mt-3 f ">
    <h1 className="mt-4  text-nowrap t " style={{color:' white',textTransform:'uppercase'}}>{(language===false)?"Mes  Compétences  ":" My Skills"}<hr /></h1>

    </div>
  <div  className="container marg_left none3 ">
    <div className="row   reveal    g-5 " >
    <span className=" col-1 "> <img src="	https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" width={50} height={50} alt="git" className='skil'/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" width={50} height={50} alt="github"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="		https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="		https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" width={50} height={50} alt="git"/></span>
   

    <span className=" col-1"> <img src="		https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" width={50} height={60} alt="git"/></span>
    <span className=" col-1"> <img src="	https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" width={50} height={50} alt="git"/></span>
    <span className=" col-1"> <img src="		https://user-images.githubusercontent.com/25181517/192106593-610ee31c-995e-4f24-b8e1-0f18eead6fae.png" width={60} height={50} alt="git"/></span>
    </div>
    
    <br/>
    <br/>
    </div>
  <div  className=" d-none container marg_left yup">
    <div className="row   reveal  pe-4  g-5  pe-5 lefting" >
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" width={40} height={40} alt="git" /></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" width={40} height={40} alt="github"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="		https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="		https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="		https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="	https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" width={40} height={40} alt="git"/></span>
    <span className=" col-2"> <img src="		https://user-images.githubusercontent.com/25181517/192106593-610ee31c-995e-4f24-b8e1-0f18eead6fae.png" width={40} height={40} alt="git"/></span>
    </div>
   
    <br/>
    </div>
    </div>
    </div>
    </div>
    
   
  
  )
}

export default Skills

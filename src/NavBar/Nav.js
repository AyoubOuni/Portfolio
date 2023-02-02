import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css';
import {AiOutlineMenu,AiOutlineClose,AiFillHome}  from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import FRA from "./FR.png";
import {FaLaptopCode} from 'react-icons/fa';
import {BiCodeAlt} from 'react-icons/bi';
import USA from "./US.png";
import {TiContacts} from 'react-icons/ti';
import {RiFolderSettingsFill}  from 'react-icons/ri';
import {FaBook} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {BsFileEarmarkPerson} from 'react-icons/bs';
export default function Nav() {
  const language=useSelector(state => state.language);
    const dispatch=useDispatch();
    const [ENG, setENG] = useState(true);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    

useEffect(() => {
  const progressBar = document.getElementById("progress");
  const progressFill = progressBar.firstElementChild;
  const sections = document.querySelectorAll("div[id]");

  window.addEventListener("scroll", () => {
    updateProgress();
    navHighlighter();
  });
  
  function updateProgress() {
    let progress =window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    // fill progress bar
    progressFill.style.width = Math.ceil(100 * progress) + "%";
  }



         // Get all sections that have an ID defined

// Add an event listener listening for scroll

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 110;
    var sectionId = current.getAttribute("id");
    
    var y= document.querySelector("a[href*=" + sectionId + "]");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
 
     y.classList.remove("notactive");
    y.classList.add("active");
    }
    else{
  y.classList.remove("active");
      y.classList.add("notactive");
    }
  });
}
}, []);


    function active(id){
      const tab=['home','about1','skills1','education1','experience1','contact1'];
      tab.map((e)=>{
        if(e!=id){
          document.getElementById(e).classList.remove("active");
          document.getElementById(e).classList.add("notactive");

        }

      })
      document.getElementById(id).classList.remove("notactive");
      document.getElementById(id).classList.add("active");
     }

function change(lang_on, lang_off1) {
    if (!lang_on.classList.contains("current_lang")) {
      lang_on.classList.add("current_lang");
      lang_off1.classList.remove("current_lang");
    }}
  
        
    useEffect(
        () => {
          
    
          
 




	



          

var english = document.getElementById("en");
var francais = document.getElementById("fr");

english.addEventListener("click", function() {
    change(english, francais);
    setENG(false) ;
    dispatch({
        type: "languag",
        payload:true
     })
});



francais.addEventListener("click", function() {
    change(francais, english);
    setENG(true) ;
    dispatch({
        type: "languag",
        payload:false
     })
  });

        },[]);
        function hide(){
          document.getElementById("drop").checked = false;document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");
        }
    function changlan(id){
          
       

var eng = document.getElementById("eng");
var fra = document.getElementById("fra");
if(id ==='eng'){

    change(eng, fra);
    setENG(false) ;
    dispatch({
        type: "languag",
        payload:true
     })
     console.log(ENG);}else if(id ==='fra'){


    change(fra, eng);
    setENG(true) ;
    dispatch({
        type: "languag",
        payload:false
     })
     console.log(ENG);


  }

        }
        useEffect(()=>{
          window.addEventListener('scroll', () => {
              if (window.scrollY > 160) {
               hide();
              } 
             
          });
          
      }, []);
    
    return(
        <>
    <React.Fragment >
      
        <span className="sticky" >
        <span id="progress" class="progress ">
	<span class="fill"></span>
</span>
        <div className="blue " ><span className="head" >Ayoub Ouni</span>
    <div className="d-flex justify-content-end ">
       <div className="marg">
       <span className="marg2">
        <a  onClick={()=> {window.scrollTo({top: 0, behavior: "smooth"});active('home');}} className= "active" href="#home"  id="home"> <span className="hov"> <span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><AiFillHome/></span>{(language===false)?"Acceuil":"Home"}</span></a>
        <a href="#about" onClick={()=>active('about1')} style={{marginLeft: "-7.5px"}} className= "notactive"  id="about1"><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><BsFileEarmarkPerson/></span>{(language===false)?" À propos ":"About"}</span></a>
        <a onClick={()=>{active('skills1');}} style={{marginLeft: "-7.5px"}} className= "notactive" id="skills1" href="#skills" ><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><BiCodeAlt/></span>{(language===false)?" Compétences  ":"Skills"}</span></a>
        <a onClick={()=>active('education1')} style={{marginLeft: "-7.5px"}} className= "notactive" href="#education" id='education1'><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><FaBook/></span>{(language===false)?" Éducation  ":"Education"}</span></a>
        <a onClick={()=>active('experience1')} style={{marginLeft: "-7.5px"}} className= "notactive" href="#experience" id="experience1"><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><FaLaptopCode/></span>{(language===false)?" Expérience  ":"Experience"}</span></a>
        <a onClick={()=>active('projects1')} style={{marginLeft: "-7.5px"}} className= "notactive" href="#projects" id="projects1"><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><RiFolderSettingsFill/></span>{(language===false)?" Projets  ":"Projects"}</span></a>
        <a  onClick={()=>active('contact1')} style={{marginLeft: "-7.5px"}}className= "notactive" href="#contact"id='contact1'><span className="hov"><span className="position-relative " style={{bottom: "2.5px",marginRight:'3px'}}><TiContacts/></span>Contact</span></a>
       </span>
        <span className="position-absolute ms-5 " style={{end:"0"}}>
        <span className="demo">
  <span>
    <table className="lang">
      <tr>
        <td >
          <span id="en" className="button_lang current_lang" on="true"><span className=" px-1">EN</span><img src={USA} width="20"  alt="EN" title="English"/></span>
        </td>
        <td><span id="fr" className="button_lang"><span className=" px-1 ">FR</span><img src={FRA} width="20" title="French"  alt="FR" /></span></td>
        
      </tr>
    </table>
    
  </span>
</span>
</span>
        </div>
        
    </div>
   <div className='show_littlescreen'>
    <span className="  d-flex justify-content-end position-absolute  end-0 " style={{top: '3.8px'}}>
    
    <nav >
   

        <label htmlFor="drop" className="toggle" ><AiOutlineMenu id="bar" onClick={()=>{document.getElementById('bar2').classList.remove("d-none");document.getElementById('bar').classList.add("d-none");}} /><AiOutlineClose onClick={()=>{document.getElementById('bar').classList.remove("d-none");document.getElementById('bar2').classList.add("d-none");}} className='d-none' id='bar2'/></label>
        <input  type="checkbox" id="drop" />
           <ul className="menu text-center w-100" >
                  
           <li className=' ' > <hr className="hr" style={{position:"relative",top: "-2.5px"}}/><a  href="#home"  onClick={()=> {window.scrollTo({top: 0, behavior: "smooth"});hide();}} id="home1"> <span className="position-relative me-1" style={{bottom: "2.5px"}}><AiFillHome/></span>{(language===false)?"Acceuil":"Home"}</a><hr className="hr" /></li>
           <li> <a  href="#about"  onClick={()=> {hide();}} id="about2"><span className="position-relative " style={{bottom: "2.5px"}}><BsFileEarmarkPerson/></span> {(language===false)?" À propos ":"About"}</a> <hr className="hr"/></li>
           <li> <a className="me-1" href="#skills" onClick={()=> {hide();}} id="skills2"> <span className="position-relative " style={{bottom: "2.5px"}}><BiCodeAlt/></span> {(language===false)?" Compétences  ":"Skills"}</a> <hr className="hr"/></li>
           <li > <a  href="#education" onClick={()=> {hide();}} id="education2"><span className="position-relative " style={{bottom: "2.5px"}}><FaBook/></span>  {(language===false)?" Éducation  ":"Education"}</a><hr className="hr"/></li>
           <li> <a  href="#experience" onClick={()=> {hide();}}  id="experience2"><span className="position-relative " style={{bottom: "2.5px"}}><FaLaptopCode/></span>  {(language===false)?" Expérience  ":"Experience"}</a><hr className="hr"/></li>
           <li> <a  href="#projects" onClick={()=> {hide();}} id="projects2"> <span className="position-relative " style={{bottom: "2.5px"}}><RiFolderSettingsFill/></span> {(language===false)?" Projets  ":"Projects"}</a><hr className="hr"/></li>
           <li> <a  href="#contact" onClick={()=> {hide();}}  id="contact2"><span className="position-relative " style={{bottom: "2.5px"}}><TiContacts/></span> Contact</a><hr className="hr"/></li>
           <li>
        <div className="ms-1" style={{marginBottom:'6px'}}>
  <span  className="left">

      
          <button id="eng" onClick={()=>{ document.getElementById('fra').classList.remove("current_lang");
          document.getElementById('eng').classList.add("current_lang");changlan('eng'); document.getElementById("drop").checked = true;}} className="button_lang current_lang" on="true"  style={{fontSize:'16px',borderRadius:'60px'}}><span className=" px-1">EN</span><img src={USA} width="20"  alt="EN" title="English"/></button>
        
        <button id="fra"  onClick={()=>{ document.getElementById('eng').classList.remove("current_lang");
          document.getElementById('fra').classList.add("current_lang");changlan('fra'); document.getElementById("drop").checked = true;}} className="button_lang ms-2" style={{borderRadius:'60px',fontSize:'16px'}}><span className=" px-1 ">FR</span><img src={FRA} width="20" title="French"  alt="FR" /></button>
        
    
    
  </span>
</div>
</li>
           
            </ul>
          
        </nav>
        </span>
        </div>

       
    
    </div>
    </span>
    </React.Fragment>
    </>
   )
}

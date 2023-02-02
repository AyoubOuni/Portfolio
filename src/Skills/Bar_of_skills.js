import React from 'react'
import './Skills.css'

function Bar_of_skills(props) {
  return (
    <>
    <div >
      <div title={props.name} className="card  widthcard  ">
      <div style={{textOverflow:"hidden",fontSize:"22px"}}  className="card-header  h4 text-center bg-primary text-white text-nowrap font">
    {props.picture} <br/><span className="margintop "> {props.name}</span></div>
    </div> 
    </div>
    </>
  )
}

export default Bar_of_skills

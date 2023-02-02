import React from 'react'
import photo from "./me.jpeg"
import './Home.css';

function Img() {
  return (
    <div>
      <div className="ms-5 " >
<img src={photo}  className="img" width="350" height="350" alt="ayoub ouni" style={{ borderRadius: '170px'}}></img>
</div>
    </div>
  )
}

export default Img

import React from "react";
import web from "../src/images/Picture3.png";
import { NavLink } from "react-router-dom";
import Service from "./Service";
import Sdata from "./Sdata";




const Card = (props) => {
  return (
    <>
      <div className='col-md-4 col-10 mx-auto'>
        <div className='card'>

          <img src={props.imgsrc} className='card-img-top' alt="alternate" style={{ width: '348px', height: '219px' }} />
          <div className='card-body'>
            <h5 className='card-title font-weight-bold' style={{color:'#7A9B8E'}}>{props.title}</h5>
            {/* <p className='card-text' >{props.desc}</p> */}
            
            {/* <NavLink to="" className="btn btn-primary"> More Details </NavLink> */}
            <details > 
              <summary >More Details</summary>
              
                  <p style={{color:'#33AAFF'}}>{props.det}</p>
                
            </details>

            
          </div>
        </div>
      </div>

    </>
  )
}

export default Card;

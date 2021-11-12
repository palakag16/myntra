import React from 'react'

import similarapi from './Similarprodapi';
import Randomstring from 'randomstring';
import { useHistory } from 'react-router-dom';

const Similarprod = () => {
    const history = useHistory();
    const backhome = ()=>{
        history.push('/');
    }
    return (
        <>
            <div className="similarprodtag">Similar products</div>

        <div className="similarprod">

       {similarapi.map((el)=>{
          return <div className="similarprodone" id={Randomstring.generate(3)} onClick={backhome}>
          <img src={el.imgsrcs} className="similarimg"></img>
          <div className="startrating">4.2<i class="fas fa-star-half"></i></div>
         <div className="spdetails">
         <div className="spbrand">{el.company}</div>
          <div className="spdesc">{el.desc}</div>
          <div className="spprice">Rs.{el.price}<span className="spcutprice">Rs.1399</span><span className="sppercent">(67%off)</span></div>
         </div>
          </div>
       })}
         
        </div>
       
        </>
    )
}

export default Similarprod

import React from 'react';
import img10 from '../images/p1.jpg';
import img11 from '../images/p2.jpg';
import img12 from '../images/p3.jpg';
import img13 from '../images/p4.jpg';
import img14 from '../images/p5.jpg';


const imgs = [img10,img14,img12,img13,img11];
const Prodviewpics = () => {
    return (
        <div className="prodviewpics">
        
        {imgs.map((imgs)=>{
          return   <div className="prodviewone"><img src={imgs} height="100%" width="100%" className="prodimg"></img></div>
        })}
       
        </div>
    )
}

export default Prodviewpics

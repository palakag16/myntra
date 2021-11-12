import React from 'react';
import img8 from '../images/i.jpg';
import img9 from '../images/j.jpg';
import img10 from '../images/k.jpg';
import img11 from '../images/l.jpg';
import img12 from '../images/m.jpg';
import img13 from '../images/n.jpg';
import Displayproditemone from './Displayproditemone';
import similarapi from '../Prodview.js/Similarprodapi';

const Displayprod = () => {
    
 
   
    return (
        <div className="displayprod">
         {similarapi.map((el)=>{
          return  <Displayproditemone imgsrc={el.imgsrcs} price={el.price} company={el.company} desc={el.desc} />
         })}
         
         
        </div>
    )
}

export default Displayprod

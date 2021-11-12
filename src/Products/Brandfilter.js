import React from 'react';
import Categoryfilter from './Categoryfilter';



const Brandfilter = ({Prod , name}) => {

    

    

   
    return (
        <div className="otherfiltercateg">
       
      

        <Categoryfilter name={name}/>
        {Prod.map((elem)=>{
            const random = Math.random()*567;
            return <div className="filtercateglist">
                <label for={random} id="checkboxlabel">
                    <input  type="checkbox" id={random} className="inputsquarecheckbox"></input>
                    <div className="squarefill"></div>
                     {elem} <span style={{opacity:"0.7", fontSize:"0.76rem", paddingLeft:"4px"}}> ({(Math.random()*4678).toFixed(0)})</span>
                </label>
            </div>
        })}

       
         
        </div>
       
       



        


    )
}

export default Brandfilter

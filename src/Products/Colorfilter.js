import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import Boldname from './Boldname';

const Colorfilter = (props) => {
    const  Price =["Rs.567 to Rs.783","Rs.767 to Rs.987","Rs.1000 to Rs.4676"]
    return (
        <div className="otherfiltercateg">
       
    
        <Boldname name={props.name}/>
        {Price.map((elem)=>{
            const random = Math.random()*567;
            return <div className="filtercateglist">
                <label for={random} id="checkboxlabel">
                    <input  type="checkbox" id={random} className="inputsquarecheckbox"></input>
                    <div className="squarefill"></div>
                     {elem}
                </label>
            </div>
        })}

       
         
        </div>
    )
}

export default Colorfilter

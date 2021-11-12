import React from 'react'
import { useHistory } from 'react-router'
const Ootdgrid1 = (props) => {
     const history = useHistory();
   
    return (
        <div className="grid1dotd" >
            <div> <img src={props.imgsrc} className="imgdealoftheday" alt="alt"></img></div>
            <div> <img src={props.logo} className="dotdlogo"></img></div>
            <div className="dotdtag"> {props.main}</div>
            <span>{props.span}</span>
        </div> 
    )
}

export default Ootdgrid1

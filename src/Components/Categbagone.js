import React from 'react'
import { useHistory } from 'react-router-dom'

const Categbagone = (props) => {
    const history = useHistory();
    const getprod=()=>{
        history.push('/prodlist');
    }
    return (
        <div className="categbagone" onClick={getprod}>
        <div> <img src={props.bagimg} className="categoneimg" alt="alt"></img></div>
        <div className="categtag">{props.bagtag}</div>
    </div>
    )
}

export default Categbagone

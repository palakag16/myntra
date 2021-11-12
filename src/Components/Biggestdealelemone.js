import React from 'react';
import { useHistory } from 'react-router';

const Biggestdealelemone = (props) => {
    const history = useHistory();
   const getfinalpage=()=>{
       history.push('/product');
   }
   
    return (
      
             <div class="biggestdealgridone" onClick={getfinalpage} >
                <div class="bdimg"><img src={props.imgbd} class="imgbiggestdeal"></img></div>
                <div class="bdlogo"><img src={props.logobd} class="bdlogo"></img></div>
                <div class="bgtag">{props.bdtag}</div>
            </div>
            
       
    )
}

export default Biggestdealelemone

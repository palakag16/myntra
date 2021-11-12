import React from 'react';
import { useHistory } from 'react-router-dom';

import Submenudropelemone from './Submenudropelemone';


const Subdropdownmenu = ({style} ) => {
   const history = useHistory();
   const getprodagain=()=>{
       history.push('/prodlist');
   }
    return (
        
            <div className="subdropdownmenu" onClick={getprodagain} >
                <Submenudropelemone style={style} />  
                <Submenudropelemone style={style}/>
                <Submenudropelemone style={style}/>


              
            </div>
        
    )
}

export default Subdropdownmenu

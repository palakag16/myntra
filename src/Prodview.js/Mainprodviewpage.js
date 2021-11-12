import React from 'react'
import Footer from '../Components/Footer'
import Mainproddetails from './Mainproddetails'
import Prodviewpics from './Prodviewpics';
import Prodslides from './Prodslides';

const Mainprodviewpage = () => {
    return (
        <>
        <div className="mainprodviewpage">
          
            
         
            <div className="imagesgridsec">
                <Prodviewpics/>

            </div>
            <Prodslides/>
           <Mainproddetails/>
            </div>
        
    
       
        </>
    )
}

export default Mainprodviewpage

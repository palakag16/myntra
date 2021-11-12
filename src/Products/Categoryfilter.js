import React from 'react';


const Categoryfilter = (props) => {
  const names = [props.name]
  
   

    const getbtn=(e)=>{
     
      const name = e.target.id;
      const idn = document.querySelector(`#${name}`);
      idn.previousSibling.style.display="flex";
      idn.previousSibling.previousSibling.style.display="none";
      idn.nextSibling.style.display="flex";
      idn.style.display="none";
      idn.parentNode.style.background="whitesmoke";

    }
    const getbacknormal=(e)=>{
        const name1 = e.target.id;
        const idn2 = document.querySelector(`#${name1}`);
        idn2.style.display="none";
        idn2.previousSibling.style.display="flex";
        idn2.previousSibling.previousSibling.style.display="none"
        idn2.previousSibling.previousSibling.previousSibling.style.display="flex";
        idn2.parentNode.style.background="transparent";
    }

    return (
        
         <>
           {
               names.map((el)=>{
             
               return  <label className="otherfilternametag">
                  <div className="filternameheadline"> {el} </div>
                  <input type ="text"  className="cine" id={Math.random().toString(23)} placeholder={`search for ${el}`}></input>
                  <div className="idname"  id={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)} onClick={getbtn}>
                    &#x2315; </div>
                  <div className="cross" id={Math.random().toString(23).replace(/[^a-z]+/g, '').substr(0, 5)} onClick={getbacknormal}>&#x000D7;</div>
              
                  </label>
               })
           }

        </>
            
    )
}

export default Categoryfilter



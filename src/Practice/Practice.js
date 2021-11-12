import React,{useState} from 'react';

const Practice = () => {
    const Dta = ["abc","hi","ioio","ii9i","hiu"]
    const DY = ["hu","io","kl","hj","jiji","yuyu"]
  
   let name;
  
    const [val,changeval]=useState();
    const[state,setstate]=useState([]);

    const getitsname=(e)=>{
  
      const name = e.target.innerHTML;
 
       changeval(name);

       state.push(val);
       setstate(state)
       console.log(state);
     
    }
    const removeitem=(e)=>{
        
        

    }
    return (
        <div>
        { Dta.map((el)=>{
            const random = Math.random()*78989;
             return <label  for={random} >
                 <input type="radio" id={random} className="hey" ></input>
                 <div className="box" > </div>
                 <div  className="hello" onClick={getitsname}>{el}</div>
                 <div  onClick={removeitem}>cross</div>
             </label>

         })}


         <br>
         </br>

         { DY.map((el)=>{
            const random = Math.random()*78989;
             return <label  for={random}>
                 <input type="radio" id={random} className="hey" ></input>
                 <div className="box" > </div>
                 <div  className="hello" onClick={getitsname}>{el}</div>
               
             </label>

         })}

         <div>heyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
         
         {state.map((el)=>{
             return <div>{el}</div>
         })}
        
           
        
            
       
        </div>
    )
}

export default Practice

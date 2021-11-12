import React,{useState} from 'react';
import Pmenuapi from './Pmenuapi';

const Pmenu = () => {
  const MenuItems= [...new Set(Pmenuapi.map((ele)=>{
          return  ele.category;
   })),"All"];
  
const[Elestate,Updatedstate]= useState(Pmenuapi);
    const Filteritems=(categ)=>{
       const updatedfilter= Pmenuapi.filter((ele)=>{
           return ele.category===categ;
        })
        Updatedstate(updatedfilter);
    }

   const getOtherfilter =()=>{
        const newfilteradded = Elestate.filter((ele)=>{
            console.log(ele.description +"heyyuu");
            return ele.description==="Lorem, ipsum dolor.";
           
        })
        Updatedstate(newfilteradded);
    }
    const getfestivefilter =(categ)=>{
        const festivefilter = Elestate.filter((ele)=>{
            console.log("festive is "+ele.festive);
            return ele.festive===categ;
        })
         Updatedstate(festivefilter);

    }
   
    
    return (
        <div>
           
          {MenuItems.map((elem)=>{
              if(elem=="All"){
                  return <button onClick={()=>Updatedstate(Pmenuapi)}>All</button>
              }
              return <button onClick={()=>  Filteritems(elem)}>{elem}</button>
          })}
         <br></br>
         <button onClick={()=>getOtherfilter()}>description</button>

         <br></br>
        <button onClick={()=>getfestivefilter(true)}>festiveshow</button> <button onClick={()=>getfestivefilter(false)} >festive hide</button>          
           {  
               
                Elestate.map((ele)=>{
                return <div key={ele.id}> hey my category is {ele.category} and my descriptiion is {ele.description} and festive category is {ele.festive} <br></br></div>
            })}

        </div>
    )
}

export default Pmenu

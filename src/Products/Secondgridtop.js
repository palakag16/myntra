import React, { useState } from 'react';
import randomstring from 'randomstring';


const Secondgridtop = () => {

    const listitems = [{name:"bundles",categs:["bundles","singles"],id:"we"},{name:"size",categs:["l","m","xs"],id:"7d"},{name:"fit",categs:["32","36","38","40","42","44","46","48"],id:"g7"}]
    const sortlistitems = ["what's new","popularity","better discount","customer rating","price:low to high","price:high to low"];
    var items;
    var itemtext;
    const [states,updatefilter] = useState(["hey"]);
   
   const getname=(e)=>{
     const namevar = e.target.innerHTML
     const morefilteritems = document.querySelector('.morefilteritems');
    const newlist = listitems.filter((elm)=>{
        return elm.name==namevar
    })
    morefilteritems.style.display="grid";
    updatefilter(newlist[0].categs);

        
   }
   const getnamefr=(e)=>{
        items = e.target.previousElementSibling;
        itemtext = items.innerHTML;
        const morefilteritems = document.querySelector('.morefilteritems');
       

        const newar = listitems.filter((elm)=>{
          return elm.name==itemtext;
        });
        morefilteritems.style.display="grid";
        updatefilter(newar[0].categs);
      
   }
 
    
  
    return (
        <>
        <div className="mainsecgridtop" >
             <div className="secondgridtop">
             <div className="bundles"> 

              {listitems.map((el)=>{
                
                  return  <label for={el.id}  className="bundleitems"  >
                <input type="radio" id={el.id} className="radiobtncl"></input> <div className="lop" onClick={getname}>{el.name}</div>
                <i class="fa fa-angle-down" aria-hidden="true" onClick={getnamefr}></i>
             </label>
              })}
     
            
             </div>
            
            
             <div className="mainsortbranch">
             <div className="sortingmain">
                 <div className="sortby">Sort by <span>: recommended</span></div>   <i class="fa fa-angle-down" aria-hidden="true"></i>
                 <div className="sortitemslist">
                  {   sortlistitems.map((ele)=>{
                   return <div className="sortlistname" >{ele}</div>
                  })}
                  
                 </div>
             </div>
             </div>
             </div>
             <div className="morefilteritems">

             {/* //to belabel */}
            {states.map((elem)=>{
                const random = (Math.random()*34).toFixed(2).toString(7);
               
             return <label for={random} className="morefilterlabel" >
                <input type="checkbox" id={random} className="morefcb"></input>
                <div className="squareboxf"></div>
                {elem}
            </label> 
            })}
        
       
           </div>
          
             
        </div>
        
        </>
    )
}

export default Secondgridtop;

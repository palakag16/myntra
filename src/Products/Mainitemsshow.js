import React from 'react'
import Brandfilter from './Brandfilter'
import Colorfilter from './Colorfilter'
import Displayprod from './Displayprod'
import Secondgridtop from './Secondgridtop';
import Products from './Productsapi';
import Similarprod from '../Prodview.js/Similarprod';
import Footer from '../Components/Footer';

const MenuItems= [...new Set(Products.map((ele)=>{
   return  ele.color;
}))];
const MenuItemcateg= [...new Set(Products.map((ele)=>{
   return  ele.category;
}))];




const Mainitemsshow = () => {
   const basiccategory = [{name:"men" ,id:"radiobtn1"},{name:"women" ,id:"radiobtn2"},{name:"girl" ,id:"radiobtn3"},{name:"boy" ,id:"radiobtn4"}]
   const sortlistitems = ["what's new","popularity","better discount","customer rating","price:low to high","price:high to low"];
    const getmobfilter=()=>{
      const flexfilters = document.querySelector('.flexfilters');
      flexfilters.classList.toggle('hidefilter');
    }


    const getfilterlist=()=>{
    if(window.innerWidth<850){
       const flexfilters = document.querySelector('.flexfilters');
       const crossfilter = document.querySelector('.crossfilter');
       crossfilter.classList.toggle('hidecross')
       flexfilters.classList.toggle('hidefilter');
    }
    else{
       console.log("error ")
    }
    }
    
    const getfilterlistone = ()=>{
      if(window.innerWidth<500){
         const flexfilters = document.querySelector('.flexfilters');
         const crossfilter = document.querySelector('.crossfilter');
         crossfilter.classList.toggle('hidecross')
         flexfilters.classList.toggle('hidefilter');
      }
      else{
         console.log("error ")
      }
    }
   

    window.addEventListener('scroll',()=>{

       if(window.innerWidth>850 && window.location.pathname=="/prodlist"){
       
       if(window.scrollY>149){
          const flexfilters = document.querySelector('.flexfilters');
          flexfilters.style.position="fixed";
          flexfilters.style.bottom="0%";
          flexfilters.style.width="18%";

       }
       else if(window.scrollY<149){
         const flexfilters = document.querySelector('.flexfilters');
         flexfilters.style.position="sticky";
         flexfilters.style.bottom="-50%";
         flexfilters.style.width="100%";
         


       }
      }
       else{
          console.log("do nothing");
       }

    })
    


 
   
     return (
       <>
        <div className="mainitemscategory">
        <div className="heyy">
            <div className="filtertitle" onClick={getfilterlist}> <i class="fa fa-filter" aria-hidden="true" ></i>FILTERS  
            <div className="crossfilter" ><i class="far fa-times-circle"></i></div></div>
           <div className="flexfilters">
           <div className="crossone" onClick={getmobfilter}><i class="far fa-times-circle"></i></div>
           <ul className="subfilters">
           

              {basiccategory.map((elems)=>{
                 return  <li>
                  <label for={elems.id} id="mainradiobtn">
                  <input type="radio" className="radiobtn" id={elems.id}></input>
                   <div className="circle"></div>
                    {elems.name}


                  </label>
                 
               </li>

              })}
               
               
            </ul>
            <Brandfilter  Prod ={MenuItems} name="color"/>
            <Brandfilter  Prod ={MenuItemcateg} name="category"/>
            <Colorfilter name="Price"></Colorfilter>
          
            <div className="applyfilter">Apply</div>
        
           </div>
           
        </div>
        
{/* 
       main grid category */}
       <div className="secondgridsection">
       <Secondgridtop/>
       <Displayprod/>
       </div>
       
            
        </div>

       <div className="filtersortmobile">
          <div className="filtermob" onClick={getfilterlistone}><i class="fa fa-filter" aria-hidden="true" ></i>Filters</div> 
          <div className="sortmob">sort
          <div className="sortdp">
            {sortlistitems.map((el)=>{
              return <div className="sortdpitem">{el}</div>
            })}
          </div>
          </div>
       </div>
      
        </>
    )
}

export default Mainitemsshow

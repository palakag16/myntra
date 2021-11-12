import React from 'react';
import mynlogo from '../Logo/mynlogo.svg';
import Subdropdownmenu from './Subdropdownmenu';
import { useHistory } from 'react-router';

const Navigation = () => {
  
   const showsidemenubar =(e)=>{
     
     
    const showsidemenu = document.querySelector('#submenu');
   
    showsidemenu.classList.toggle('activeside');

    e.preventDefault();
   }
    
   const history = useHistory();
   const gethome=()=>{
       history.push('/')
   }
  const getsearchbox = ()=>{
      if(window.innerWidth<501){
         var submenuhide = document.querySelector("#submenuhide");
         var smallsearchbox = document.querySelector('#smallsearchbox');
         submenuhide.style.display="none";
         submenuhide.style.opacity=0;
         smallsearchbox.style.display="block";

         window.addEventListener("click",(e)=>{
            if(e.target.className!= "fa fa-search"){
                submenuhide.style.display="flex";
                submenuhide.style.opacity=1;
                smallsearchbox.style.display="none";
            }
         })
      }
  }

    return (
       

        <div className="mainnavigation">
            <div className="slidinghambmenu" onClick={showsidemenubar}><i class="fas fa-bars"></i> </div>
            <div className="logoimg" onClick={gethome}> <img src={mynlogo} className="mynlogo"></img></div>
                        
             <div className="submenu" id="submenu"> 
            
            <div className="menuname green">Men
             <Subdropdownmenu style={{color:"green"}} />
            </div> 
             <div className="menuname blue">women
             <Subdropdownmenu style={{color:"blue"}}/>
             </div>  
             <div className="menuname brown">kids
             <Subdropdownmenu style={{color:"brown"}}/>
             </div>  
             <div className="menuname orange">living
             <Subdropdownmenu style={{color:"orange"}}/>
             </div>  
             <div className="menuname  red">beauty
             <Subdropdownmenu style={{color:"red"}}/>
             </div>
          
            </div>

            <div className="searchboxdiv"> <i className="fa fa-search" aria-hidden="true" onClick={getsearchbox} ></i> <input type="text"  placeholder="search for products, brands and more" className="searchbox" id="smallsearchbox"></input></div>
            <div className="submenumenu" id="submenuhide">  <div><i className="far fa-user"></i> <span className="spantag">profile</span></div>  <div><i className="far fa-heart"></i> <span className="spantag">wishlist</span></div>  <div><i className="fas fa-shopping-bag"></i> <span className="spantag">bag</span></div> </div>
        </div>
    )
}

export default  Navigation;



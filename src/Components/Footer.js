import React from 'react';
import applelogo from '../Logo/applestore.svg';
import playstore from '../Logo/googleplay.svg';

const Footer = () => {
    const list = ["men","women","kids","living","gift cards","myntra insider"];
    const list2 =[ "contact", "q & A","shipping","cancellation","return","track orders","terms & consdition" ,"blog","site map"];
    return (
        <div className="footer">
        <div className="footersection">online  shopping 
        <br></br>
       <div className="footerlistitem">
           {list.map((elem)=>{
               return <li key={Math.random()*3}>{elem}</li>
           })}
       </div>

       
        </div>
            

        <div className="footersection">useful links
        <br></br>
       <div className="footerlistitem">
           {list2.map((elem)=>{
               return <li key={Math.random()*3}>{elem}</li>
           })}
       </div>
        </div>

        <div className="footersection newfooterstyle">Experience myntra app on mobile
        <br></br>
        <div className="footerappsuggestion">
          <div> <img src={applelogo} className="footerlogo"></img></div>
          <div><img src={playstore} className="footerlogo"></img></div>
        </div>
        <div className="keepintouch"> keep in touch</div>
        <div className="iconskeepintouch"> 
        <i class="fab fa-facebook-f"></i> <i className="fab fa-twitter"></i> <i className="fab fa-youtube"></i> <i className="fab fa-instagram"></i>
        </div>
        </div>
        
        <div className="footerlastsection">
      
       <div className="footerexcahngecol">
       <i className="far fa-check-circle"></i> 
       <div><span>100% ORIGINAL</span> guarantee for all products at myntra.com</div></div>
       <div className="footerexcahngecol"> 
       <i className="fas fa-exchange-alt"></i>
       <div><span> Return within 30days</span> of receiving your order</div></div>
        </div>
        
        </div>
    )
}

export default Footer

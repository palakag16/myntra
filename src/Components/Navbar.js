import React from 'react'

const Navbar = () => {
  const hideelem = ()=>{
    var flat = document.querySelector('#sidebannerflat');
    var icon = document.querySelector('#cadetdown');
    
    flat.classList.toggle('activec');
    console.log(icon.class);
    icon.classList.toggle('fa-caret-up');
    
    document.addEventListener("click",(e)=>{
    
     
     if(e.target.className!="sidetitle"){
       
      var flat = document.querySelector('#sidebannerflat');
      icon.classList.remove('fa-caret-up');
      flat.classList.remove('activec');
     }
      
     
     })

    
  }
 
    return (
       <div className="mainmainsideheight">

        

       <div className="mainside" id="sidebannerflat" onClick={hideelem}>
       <div className="sidetitle">get &#8377;300 off <i class="fas fa-caret-down " id="cadetdown"></i></div>
       <div className="details">
         <div className="topsidedetais">
         <div className="availnow"> avail now</div>
         <div className="gefreeship"> flat &#8377;300 off <span className="spanfree">+</span> free shipping </div>
         <div className="couponsection"> 
         <div className="couponcode">
           <div className="coupondet">coupon code: <span>myntra300</span></div>
           <div className="application">applicable on your first order</div>
         </div>
         <div className="signup">Sign up now </div></div>
         </div>
         <div className="bottomdetails">
         <div> <i class="fas fa-tshirt"></i>try and buy</div>   <div> <i class="fas fa-exchange-alt"></i>easy exchange and return</div>   <div> <i class="far fa-check-circle"></i>genuine product</div>
          </div>
       </div>
        
        
        </div>
         
      

      
       
       
      
       
       </div>
    )
}

export default Navbar

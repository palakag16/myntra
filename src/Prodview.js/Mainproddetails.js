import React, { useState } from 'react';

import Specifications from './Specifiactions';

const Mainproddetails = () => {
    const sizes = [{size:"xs",popsize:"30" },{size:"s",popsize:"32" },{size:"m",popsize:"34" },{size:"l",popsize:"36" },{size:"xl",popsize:"38"},{size:"xxl",popsize:"40"}]
   const proddetails=["Navy Blue printed kurta with trousers and dupatta",
                       " Navy Blue printed straight calf  kurta, has a round neck, three-quarter sleeves, side slits",
                         " Navy Blue solid trousers, has partially elasticated waistband, slip-on closure",
                          "Navy Blue printed dupatta, has taping border"]
    const[popsizes,updatesize]=useState(["hey"]);
    const[specs,updatespecs]=useState(Specifications.slice(0,6));
    const [getpin,updatepin]=useState();
    
    const getmorespec=()=>{
         updatespecs(Specifications.slice(0,Specifications.length));
          const seemore = document.querySelector('.seemore');
          seemore.style.display="none";

       
    }
   
    const getsizepop=(e)=>{
    const sizepop = document.querySelector('.sizepop');
    sizepop.style.display="block";
    const updatedarr = sizes.filter((el)=>{
        return e.target.innerHTML==el.size;
          
    })
    updatesize(updatedarr);
    }
    const hidesizepop=()=>{
        const sizepop = document.querySelector('.sizepop');
        sizepop.style.display="none";
    }
    const getnumbers=(e)=>{
        
       if(e.target.value.length===6){
    
           const check = document.querySelector(".check");
           check.style.color="rgb(241, 36, 70)";
           check.style.opacity="1";
       }
       else if(e.target.value.length<6){
        const check = document.querySelector(".check");
        check.style.color="black";
        check.style.opacity="0.7"
       }
       updatepin(e.target.value);
         
       }
    const getdeliveryinfo=()=>{
        const check = document.querySelector(".check");
        const showdeliverystatus = document.querySelector('.showdeliverystatus');
        const toggledeliverystatus = document.querySelector('.toggledeliverystatus');
        const checkpin = document.querySelector('.checkpin');
        const getgreenbutton=document.querySelector('.getgreenbutton');
        toggledeliverystatus.style.display="none";
        showdeliverystatus.style.display="block";
        getgreenbutton.style.display="flex";
        checkpin.style.display="none";
       
        check.innerHTML="CHANGE";
       
    }
    const getpininput=()=>{
        const checkpin = document.querySelector('.checkpin');
        const getgreenbutton=document.querySelector('.getgreenbutton');
        const check = document.querySelector(".check");
        const showdeliverystatus = document.querySelector('.showdeliverystatus');
        const toggledeliverystatus = document.querySelector('.toggledeliverystatus');
        checkpin.style.display="flex";
        checkpin.value="";
        toggledeliverystatus.style.display="block";
        showdeliverystatus.style.display="none";
        getgreenbutton.style.display="none";
        check.innerHTML="CHECK";
        check.style.color="black";
        check.style.opacity="0.7";


    }
    return (
        <div className="mainproddetails">
        
         <div className="detailsone">
          <div className="pbrand">Ahika</div>
          <div className="pdes">Women Black & Green Printed Straight Kurta</div>
          <div className="prating"> 4 <span><i class="fas fa-star"></i> | 9.6k Ratings</span></div>
         </div>
         <div className="Rssection">
             <div className="pprice">Rs.680 <span className="pcutprice">Rs.1350</span> <span className="ppercent">(56% Off)</span></div>
             <div className="pinclusion">inclusive of all prices</div>
             <div className="sizetag"> select size <span>size chart <i class="fas fa-chevron-right"></i> </span></div>
             <div className="sizeselction">
             <div className="sizepop">
             <div className="sgarment">Garment measurement:<span> bust-{popsizes[0].popsize}in</span></div>
             <div className="modeldetail">The model (height6') is wearing size s</div>
             </div>
                 {
                     sizes.map((el)=>{
                         return <div className="sizename" onMouseEnter={getsizepop} onMouseLeave={hidesizepop}>{el.size}</div> 
                     })
                 }   
                 
             </div>
             <br></br>
             <div className="pbuttons">
                 <div className="atcbtn"><i className="fas fa-shopping-bag"></i> add to bag</div>  <div className="wbtn"><i className="far fa-heart"></i> wishlist</div>
             </div>

         </div>
         <div className="deliveryoptions">
         <div className="dtag">delivery options <i class="fas fa-shipping-fast"></i></div>
         <div className="dpin">
             <input type="pin" className="checkpin" onChange={getnumbers} maxLength="6" pattern=" /^-?\d*$/" placeholder="Enter a PIN code"></input>
             <div  className="getgreenbutton " onClick={getpininput}>{getpin}<i class="fas fa-check-circle"></i></div> <div className="check" onClick={getdeliveryinfo}>check</div>
         </div>
         </div>
        <div className="toggledeliverystatus">
        <div className="dinputinfo">Please enter PIN code to check delivery time & Pay on Delivery Availability</div>
         <div className="basicassurancedetails">100% Original Products<br></br>
            Pay on delivery might be available<br></br>
            Easy 30 days returns and exchanges</div>
        </div>
        <div className="showdeliverystatus">
           <div className="shippingdeliverydetails">
            <div><i class="fas fa-shipping-fast"></i> Get it by Thu, Aug12</div>
            <div><i class="fas fa-rupee-sign"></i>Pay on delivery available</div>
           <div><i class="fas fa-exchange-alt"></i>Easy 30 days return & exchange available</div>
           </div>
           <div className="orignaltag">100% original products</div>
        </div>
        <div className="bestoffers">
            <div className="botag">Best offers <i class="fas fa-tags"></i></div>
            <div className="boinfotag">This product is already at its best price</div>
        </div>
        <div className="productdetailsection">
            <div className="productdetailtag">Product details <i class="fas fa-info-circle"></i></div>
            <div className="proddetails">
              {  proddetails.map((el)=>{
                     return <div>{el}</div>
              })}
            </div>
           <div className="prodspecrepeat"> <div className="sizeandfitandmaterial">size & fit</div>
            <div className="sizeandfitcommom">The model (height 5'8") is wearing a size S</div>
            </div>
            <div className="prodspecrepeat"> <div className="sizeandfitandmaterial">Material & care</div>
            <div className="sizeandfitcommom">
                <div>Kurta fabric: cotton blend</div>
                  <div>  Bottom fabric: cotton blend</div>
                     <div>Dupatta fabric: cotton blend</div>
                    <div> Dry-clean</div>
                     </div>
        
            </div>
           <div className="specifiactionssection"> 
           <div className="prodspectag">specifiaction</div>
           <div className="specificationgrid"> 

          {specs.map((item)=>{
                return  <div className="specgriditemone">
               <div className="speciname">{item.spectype}</div>
               <div className="specdesc">{item.specval}</div>
           </div> 
          })}
           <div className="seemore" onClick={getmorespec}>see more </div>
           </div>
           </div>
        </div>
        </div>
    )
}

export default Mainproddetails

import React from 'react';
import { useHistory } from 'react-router';

const Displayproditemone = (props) => {
   const history = useHistory();
   const getfinalpage = ()=>{
       history.push('/product');
   }
    return (
       <div className="displayitemone" onClick={getfinalpage}>
        <div className="displayimg">
            <img src={props.imgsrc} className="displayimage"></img>
            <div className="viewsimilar"><i class="far fa-images"></i> <span className="similartext">View similar</span></div>  
        </div>
        <div className="displaydetails">

        <div className="shownitem">
        <div className="brand">{props.company}</div>
        <div className="descr">{props.desc}</div>
        </div>

        <div className="hideitem">
        <div className="wishlist"><i className="far fa-heart"></i>wishlist</div>
        <div className="sizechart">Sizes: <span>xs, x, m, l, xl, xxl, 3xl</span></div>
        </div>

        <div className="price">{props.price}<span className="cutprice">Rs.1360</span> <span className="discpercentage">(56%off)</span></div>
            
        </div>

        </div>
    )
}

export default Displayproditemone

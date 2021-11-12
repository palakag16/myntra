import React from 'react'

const Topmenu = () => {
    
   
    const elems= ["Home","Women","Clothing","Jeans"]
    const eles = elems.pop();
   
    
    
    return (
        <div className="Topfitercateg">
        <div className="topmenuelem1">{elems.join(' / ')} / <span style={{fontWeight:700}}>{eles}</span></div>
        <div className="topmenuelem2"><span style={{fontWeight:600}} >{eles}</span> - <span style={{opacity:0.8}}>789090 items</span></div>
        </div>
    )
}

export default Topmenu

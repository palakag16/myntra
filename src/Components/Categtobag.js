import React from 'react';
import img17 from '../images/p.jpg';
import img18 from '../images/q.jpg';
import img19 from '../images/r.jpg';
import img10 from '../images/k.jpg';
import img11 from '../images/l.jpg';
import img16 from '../images/e.jpg';
import img12 from '../images/m.jpg';
import img13 from '../images/n.jpg';
import img14 from '../images/o.jpg';
import img15 from '../images/g.jpg';
import Categbagone from './Categbagone';

const Categtobag = () => {
    return (
        <div className="categbag">
            <Categbagone bagtag="top" bagimg={img17}/>
            <Categbagone bagtag="jeans" bagimg={img10}/>
            <Categbagone bagtag="pants" bagimg={img11}/>
            <Categbagone bagtag="t-shirt" bagimg={img12}/>
            <Categbagone bagtag="bags" bagimg={img13}/>
            <Categbagone bagtag="tops" bagimg={img14}/>
            <Categbagone bagtag="shirt" bagimg={img15}/>
            <Categbagone bagtag="women" bagimg={img16}/>
            <Categbagone bagtag="clothing" bagimg={img18}/>
            <Categbagone bagtag="trouser" bagimg={img19}/>
            <Categbagone bagtag="jacket" bagimg={img10}/>
            <Categbagone bagtag="pants" bagimg={img13}/>

           

           
        </div>
    )
}

export default Categtobag

import React from 'react';
import img1 from '../images/g.jpg';
import img2 from '../images/b.jpg';
import img3 from '../images/c.jpg';
import img4 from '../images/d.jpg';
import img5 from '../images/e.jpg';
import Logo1 from '../Logo/Nike_logo.svg';
import Logo2 from '../Logo/Prada_logo.svg';
import Logo3 from '../Logo/Puma_logo.svg';
import Logo4 from '../Logo/rampage.svg';
import Ootdgrid1 from './Ootdgrid1';
import { useHistory } from 'react-router';

const Daloftheday = () => {
  const history = useHistory();
  const getsecondpage=()=>{
    history.push('/prodlist');
  }
    return (
        <div className="dealofday" onClick={getsecondpage}>
      
      <Ootdgrid1  logo={Logo1} main="flat 40% off" span="on  all  t-shirts" imgsrc={img2}/>

      <Ootdgrid1  logo={Logo2} main="flat 50% off" span="on  all  shirts"  imgsrc={img5} />

      <Ootdgrid1  logo={Logo3} main="flat 20% off" span="on  everything"  imgsrc={img3}/>

      <Ootdgrid1  logo={Logo4} main="flat 40% off" span="on  mens  clothing"  imgsrc={img4}/>

      <Ootdgrid1  logo={Logo1} main="flat 70% off" span="on  jeans and pants"  imgsrc={img5}/>   
        </div>
    )
}

export default Daloftheday

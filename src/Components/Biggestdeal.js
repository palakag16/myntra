import React from 'react';
import img7 from '../images/h.jpg';
import img8 from '../images/i.jpg';
import img9 from '../images/j.jpg';
import img10 from '../images/k.jpg';
import img11 from '../images/l.jpg';
import img12 from '../images/m.jpg';
import img13 from '../images/n.jpg';
import img14 from '../images/o.jpg';
import img15 from '../images/g.jpg';
import img16 from '../images/e.jpg';
import logo6 from '../Logo/tommy.svg';
import logo7 from '../Logo/uspolo.svg';
import logo8 from '../Logo/Prada_logo.svg';
import logo9 from '../Logo/gap.svg';
import logo10 from '../Logo/Nike_logo.svg';
import Biggestdealelemone from './Biggestdealelemone';

const Biggestdeal = () => {
    return (
        <div class="biggestdealgrid">
            <Biggestdealelemone bdtag="min 60% off" logobd={logo6} imgbd={img7}/>
            <Biggestdealelemone bdtag="min 40% off" logobd={logo7} imgbd={img8}/>
            <Biggestdealelemone bdtag="upto 60% off" logobd={logo8} imgbd={img9}/>
            <Biggestdealelemone bdtag="min 30% off" logobd={logo9} imgbd={img10}/>
            <Biggestdealelemone bdtag="upt0 80% off" logobd={logo10} imgbd={img11}/>
            <Biggestdealelemone bdtag="min 60% off" logobd={logo8} imgbd={img12}/>
            <Biggestdealelemone bdtag="min 40% off" logobd={logo7} imgbd={img15}/>
            <Biggestdealelemone bdtag="upto 60% off" logobd={logo6} imgbd={img13}/>
            <Biggestdealelemone bdtag="min 30% off" logobd={logo10} imgbd={img16}/>
            <Biggestdealelemone bdtag="min 30% off" logobd={logo9} imgbd={img10}/>
           
            
            

        </div>
    )
}

export default Biggestdeal

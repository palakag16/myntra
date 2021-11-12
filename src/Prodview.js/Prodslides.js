import React from 'react';
import {Carousel} from 'react-bootstrap'
import img10 from '../images/p1.jpg';
import img11 from '../images/p2.jpg';
import img12 from '../images/p3.jpg';
import img13 from '../images/p4.jpg';
import img14 from '../images/p5.jpg';

const Prodslides = () => {
    return (
        <div className="prodslides">
           
        <Carousel indicators={true} pause={'hover'}  slide={true} className="sliderhide">
            <Carousel.Item  interval={2000} className="pos">
                <img src={img10} height="400px" width="100%"></img>
            </Carousel.Item>
            <Carousel.Item  interval={2000}>
            <img src={img11} height="400px" width="100%"></img>
            </Carousel.Item>
            <Carousel.Item  interval={2000} >
            <img src={img12} height="400px" width="100%"></img>
            </Carousel.Item>
            <Carousel.Item  interval={2000} >
            <img src={img13} height="400px" width="100%"></img>
            </Carousel.Item>
            <Carousel.Item  interval={2000} >
            <img src={img14} height="400px" width="100%"></img>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Prodslides

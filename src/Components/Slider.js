import React from 'react';
import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpg';
import Slide3 from '../images/Slide3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';



const Slider = () => {
    const history = useHistory();
    const getprodd = ()=>{
        history.push('/prodlist');
    }
    return (
        <div className="slider" onClick={getprodd}>
           
            <Carousel indicators={true} pause={'hover'}  slide={true} className="sliderhide">
                <Carousel.Item  interval={3000} className="pos">
                    <img src={Slide1} height="auto" width="100%"></img>
                </Carousel.Item>
                <Carousel.Item  interval={3000}>
                <img src={Slide2} height="auto" width="100%"></img>
                </Carousel.Item>
                <Carousel.Item  interval={3000} >
                <img src={Slide3} height="auto" width="100%"></img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider


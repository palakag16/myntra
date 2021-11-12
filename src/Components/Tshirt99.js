import React from 'react';
import { useHistory } from 'react-router-dom';
import imgs from '../tshirt99.jpg';

const Tshirt99 = () => {
    const history = useHistory();
    const getproduct=()=>{
        history.push('/product');    
    }
    return (
        <div>
            <div className="mainbanner" onClick={getproduct}>
                <img src={imgs} className="t99" alt="88" href="https://www.myntra.com/"></img>
            </div>
        </div>
    )
}

export default Tshirt99

import React from 'react';
import Navigation from '../Components/Navigation';
import Mainprodviewpage from '../Prodview.js/Mainprodviewpage';
import Footer from '../Components/Footer';
import Topprodnav from '../Prodview.js/Topprodnav';
import Similarprod from '../Prodview.js/Similarprod';
import Navbar from '../Components/Navbar';

const Productview = () => {
    return (
        <div>
    <Navigation/>
    <Navbar/>
    <Topprodnav/>
   <Mainprodviewpage/>
    <Similarprod/>
     <Footer/>
        </div>
    )
}

export default Productview

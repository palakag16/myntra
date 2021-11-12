import React from 'react';
import Navbar from '../Components/Navbar';
import Freeshipping from '../Components/Freeshipping';
import Tshirt99 from '../Components/Tshirt99';
import Maintitle from '../Components/Maintitle';
import Daloftheday from '../Components/Daloftheday';
import Biggestdeal from '../Components/Biggestdeal';
import Slider from '../Components/Slider';
import Categtobag from '../Components/Categtobag';
import Navigation from '../Components/Navigation';
import Trendingndian from '../Components/Trendingndian';
import Footer from '../Components/Footer';
    


const Landing = () => {
    return (
      <>
     <Navbar/>
     <Navigation/>
     <Freeshipping/>
     <Slider/>
     <Tshirt99/> 
     <Maintitle title="deals of the day"/>
     <Daloftheday/>
     <br/>
     <Maintitle title="biggest deals on top brands"/>
     <Biggestdeal/>
     <Maintitle title="categories to bag"/>
     <Categtobag/>
     <Maintitle title="Trending in western wear"/>    
     <Trendingndian/>
     <Maintitle title="biggest deals on top brands"/>
     <Biggestdeal/>
     <Footer/>   
      
      </>
     
    )
}

export default Landing

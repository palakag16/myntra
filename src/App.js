import React from 'react';
import {Route,Switch} from "react-router-dom";

import './Style.scss';
import './Secondstyle.scss';
import './Thirdstyle.scss';



import Landing from './Maincompo/Landing';
import Prodlist from './Maincompo/Prodlist';
import Productview from './Maincompo/Productview';
import Freeshipping from './Components/Freeshipping';
import Navigation from './Components/Navigation';




const App = () => {
  return (
    <>
  
      <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route exact path="/prodlist"><Prodlist/></Route>
        <Route exact path="/product"><Productview/></Route>
      </Switch>
    

    
    </>
   
  )
}

export default App

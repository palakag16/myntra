import React from 'react'
import { useHistory } from 'react-router-dom'


const Trendinggridelemone = (props) => {

    const history = useHistory();
    const getprodlist = ()=>{
        history.push('/prodlist');
    }
        return (
        <div className="trendinggridelemone" onClick={getprodlist}>
        <div><img src={props.trendimg} className="trendingimg"></img></div>
        <div className="trendingtag">{props.trendtitle}</div>
        <div className="trendingspan">+EXPLORE</div>
    </div>
    )
}

export default Trendinggridelemone

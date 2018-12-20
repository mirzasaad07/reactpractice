import React, { Component } from 'react';

const GetSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const Seasondisplay = (props) => {
    const season = GetSeason(props.lat, new Date().getMonth())
    console.log(season)
    
    const text = season === 'winter' ? 'burahh its chilli' : 'lets move on beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return ( 
          <div style={{backgroundColor: 'skyblue'}}>      
            <i className={`icon-left massive ${icon} icon`}/>
             <h3 style={{fontSize: '50px'}}>{text}</h3>
         </div>   
     );
    }
    
 
export default Seasondisplay;
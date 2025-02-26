import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedCountryFlags}) => {
const {name,flags,area,population}=country;

const [Visited , setVisited]= useState(false);
const handleVisited = () => {
    setVisited(Visited);
}


    return (
        <div className='country'>
            <h3>Name : {name.common} </h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h4>Area : {area}</h4>
            <button onClick={()=> handleVisitedCountry(country)}>Mark As Visited</button>
            <br />  
            <button onClick={handleVisited}>Visited</button>
            {Visited ? 'I have Visited This Country.' : 'I Want To Visit This Country'}
        </div>
    );
};

export default Country;
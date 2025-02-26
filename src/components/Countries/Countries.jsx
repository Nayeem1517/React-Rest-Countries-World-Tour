import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry , setVisitedCountry]= useState([]);
    const [visitedCountryFlag,setVisitedCountryFlag]=useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('Add this to your visited Country');
        const newVisitedCountry = [...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
    }

    const handleVisitedCountryFlags = flags =>{
        console.log('add this to your visited country flags');
        const newVisitedCountryFlags = [...visitedCountryFlag,flags];
        setVisitedCountryFlag(newVisitedCountryFlags);
    }

    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            {/* HAndle Visited Country */}
            <div>
                <h5>Visited Country : {visitedCountry.length}</h5>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    visitedCountryFlag.map(flags => <img src={flags}></img>)
                }
            </div>
            <div className="container">
            {
                countries.map(country => <Country 
                    key ={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedCountryFlags ={handleVisitedCountryFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
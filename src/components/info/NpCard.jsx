import React from 'react';


const NpCard = ({ data }) => {
    return (
        <div className="text-left">
            <div className="items">
                <span><img src="https://www.countryflags.io/np/flat/64.png" alt="flag" /><span className="bold">NEPAL</span></span>
                <h4>Date : {data.Date}</h4>
                <h3> Total Confirmed : <span>{data.TotalConfirmed}</span></h3>
                <h3> Total Deaths : <span>{data.TotalDeaths}</span></h3>
                <h3> Total Recovered : <span>{data.TotalRecovered}</span></h3>
                <h3> New Confirmed : <span> +{data.NewConfirmed}</span></h3>
                <h3> New Deaths : <span className='death'>{data.NewDeaths}</span></h3>
                <h3> New Recoverded : <span className="recover">{data.NewRecovered}</span></h3>
            </div>
        </div>
    );
}

export default NpCard;
import React from 'react';
import Humanize from 'humanize-plus'
import globe from './world.png'

const WordlCard = ({data}) => {
    return (
        <div className="text-left">
            <span><img src={globe} alt="globe" /><span className="bold"> World Wide</span></span>
            <div className="items">
                <h3> Total Confirmed : <span>{Humanize.intComma(data.TotalConfirmed)}</span></h3>
                <h3> TotalDeaths : <span>{Humanize.intComma(data.TotalDeaths)}</span></h3>
                <h3> Total Recovered : <span>{Humanize.intComma(data.TotalRecovered)}</span></h3>
                <h3> New Confirmed : <span> +{Humanize.intComma(data.NewConfirmed)}</span></h3>
                <h3> New Deaths : <span className='death'>{Humanize.intComma(data.NewDeaths)}</span></h3>
                <h3> New Recoverded : <span className='recover'>{Humanize.intComma(data.NewRecovered)}</span></h3>
            </div>
        </div>
    );
}

export default WordlCard;
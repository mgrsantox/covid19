import React from 'react';
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Humanize from 'humanize-plus'


const WordlTable = ({ data }) => {
    return (
        <div className="">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                        <th>New Case</th>
                        <th>New Death</th>
                        <th>New Recovered</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(cs => {
                return (
                    <tr key={cs.CountryCode} className="text-left">
                        <td><Link to={cs.Slug}><img src={`https://www.countryflags.io/${cs.CountryCode}/flat/24.png`} alt="flag" /> {cs.Country}</Link></td>
                        <td>{Humanize.intComma(cs.TotalConfirmed)}</td>
                        <td>{Humanize.intComma(cs.TotalRecovered)}</td>
                        <td>{Humanize.intComma(cs.TotalDeaths)}</td>
                        <td><span>+</span>{Humanize.intComma(cs.NewConfirmed)}</td>
                        <td className='death'> <span>{Humanize.intComma(cs.NewDeaths)}</span></td>
                        <td className='recover'>{Humanize.intComma(cs.NewRecovered)}</td>
                    </tr>
              )
            })}
                </tbody>
            </Table>
        </div>
    );
}

export default WordlTable;
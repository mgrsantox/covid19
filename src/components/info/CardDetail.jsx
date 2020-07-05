import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Table from 'react-bootstrap/Table'
import Humanize from 'humanize-plus'


const CardDetail = ({ match }) => {
    const [detail, SetDetail] = useState([]);
    useEffect(() => {
        api.get(`dayone/country/${match.params.slug}`)
            .then(res => {
                SetDetail(res.data.reverse())
            })
            .catch(err => {
                console.log("Error");
                console.log(err);
            })
    }, [match.params.slug])
    return (
        <div className="footer">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                {detail.map(dat => {
                    return (
                        <tr key={dat.Date}>
                            <td>{dat.Date}</td>
                            <td>{Humanize.intComma(dat.Confirmed)}</td>
                            <td>{Humanize.intComma(dat.Active)}</td>
                            <td>{Humanize.intComma(dat.Deaths)}</td>
                            <td>{Humanize.intComma(dat.Recovered)}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    );
}

export default CardDetail;
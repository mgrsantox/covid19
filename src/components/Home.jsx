import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorldCard from './info/WorldCard';
import NpCard from './info/NpCard';
import WordlTable from './info/WordTable';

const Home = ()=>{
    const [live, SetLive] = useState({});
    const [np, SetNp] = useState({});
    const [world, SetWorld] = useState([]);
    useEffect(() => {
      api.get('/summary')
      .then(res=>{
        SetLive(res.data.Global);
        SetWorld(res.data.Countries);
        res.data.Countries.map(d=>{
          if (d.Country ==="Nepal"){
            return(SetNp(d))
          }
          return 0;
        })
      })
      .catch(err=>{
        console.log("Error");
        console.log(err);
      })
    }, [])
    return(
        <Container className="mt-2">
        <Row>
          <Col md={6}>
          <WorldCard data={live} />
          </Col>
          <Col md={6}>
          <NpCard data={np} />
          </Col>
        </Row>
        <hr/>
        <div className="all-info">
          <WordlTable data={world} />
        </div>
      </Container>
    )
}

export default Home;
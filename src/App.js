// import './App.css';
import React,{useEffect, useState } from 'react';
import axios from "axios"
import { Button, Table, Container, Col, Row, InputGroup, FormControl } from "react-bootstrap"

function App ()
{
    const [ countries, setCountries ] = useState( [] )
    const [filteredCountries, setFilteredCountries] = useState([])  
    const [ filter, setFilter ] = useState( "" )
    const [filterCap, setFilterCap] = useState("")
    useEffect( () =>
    {
        async function fetchData ()
        {
            const { data } = await axios.get( "https://restcountries.eu/rest/v2/all" )
            console.log(data)
            setCountries( data )
            setFilteredCountries(data)
        }
        fetchData()
    },[] )
    console.log( countries )
    function handleChange (e)
    {
        setFilter( e.target.value )
        setFilteredCountries(
            countries.filter(
            country => country.capital.toLowerCase().includes(e.target.value.toLowerCase()) || country.name.toLowerCase().includes(e.target.value.toLowerCase()) || country.region.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
    }
    function handleChangeCap (e)
    {
        setFilterCap( e.target.value )
        setFilteredCountries(
            countries.filter(
            country => country.capital.toLowerCase().includes(e.target.value.toLowerCase())
            )
        )
    }
  return (
      <Container fluid>
          <Row className="justify-content-center my-5">
              <Col xs={ 11 }>
                  <Row>
                      <Col xs={ 12 } md={ 6 }>
                                             <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                            <img src="https://image.flaticon.com/icons/png/512/622/622669.png" width="auto" height="20px" alt="search icon" />
                        </InputGroup.Text>
                        <FormControl
                        placeholder="Write any to filter capital"
                        aria-label="Capital Name"
                                  aria-describedby="basic-addon1"
                                  value={ filterCap }
                                  onChange={handleChangeCap}
                        />
                    </InputGroup>
                      </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">
                                    <img src="https://image.flaticon.com/icons/png/512/622/622669.png" width="auto" height="20px" alt="search icon" />
                                </InputGroup.Text>
                                <FormControl
                                placeholder="Write any to filter all"
                                aria-label="seacrh key"
                                  aria-describedby="basic-addon1"
                                  value={ filter }
                                  onChange={handleChange}
                                />
                           </InputGroup>
                      </Col>
                  </Row>
 
              </Col>
              <Col xs={ 11 } className="d-none d-sm-block">
                   <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Flag</th>
                </tr>
            </thead>
              <tbody>
                  {
                      countries && filteredCountries.map(
                          country => (
                              <tr key={country.numericCode}>
                                  <th>{ country.name }</th>
                                  <th>{ country.capital }</th>
                                  <th>{ country.region }</th>
                                  <th><img src={country.flag} width="100px" height="auto" alt={`${country.name} flag`}/></th>
                              </tr>
                         )
                     )
                  }
            </tbody>
                  </Table>
              </Col>

              <Col xs={ 11 } className="d-block d-sm-none">
                  {
                      countries && filteredCountries.map(
                          country => (
                              <Table striped bordered hover variant="dark" responsive>
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>{ country.name }</th>
                                        </tr>
                                    </thead>
                                  <tbody>
                                      <tr>
                                      <th>Capital</th>
                                      <th>{ country.capital }</th>
                                  </tr>
                                  <tr>
                                      <th>Region</th>
                                      <th>{ country.region }</th>
                                  </tr>
                                  <tr>
                                      <th>Flag</th>
                                      <th><img src={country.flag} width="100px" height="auto" alt={`${country.name} flag`}/></th>
                                  </tr>
                                </tbody>
                                                                
                              </Table>
                          )
                      )
                  }
              </Col>
        </Row>
    </Container>
  );
}

export default App;

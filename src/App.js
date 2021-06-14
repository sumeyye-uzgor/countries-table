import './App.css';
import React,{useEffect, useState } from 'react';
import axios from "axios"
import {Table} from "react-bootstrap"

function App ()
{
    const [countries, setCountries] = useState([])
    useEffect( () =>
    {
        async function fetchData ()
        {
            const { data } = await axios.get( "https://restcountries.eu/rest/v2/all" )
            console.log(data)
            setCountries(data)
        }
        fetchData()
    },[] )
    console.log(countries)
  return (
    <div className="d-flex justify-content-center align-center">
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
                      countries && countries.map(
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
    </div>
  );
}

export default App;

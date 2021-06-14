// import './App.css';
import React,{useEffect, useState } from 'react';
import axios from "axios"
import {Container, Row } from "react-bootstrap"
import DesktopTable from './components/DesktopTable.component';
import MobileTable from './components/MobileTable.component';
import InputFields from './components/InputFields.component';


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
            setCountries( data )
            setFilteredCountries(data)
        }
        fetchData()
    },[] )
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
                <InputFields handleChange={ handleChange } handleChangeCap={ handleChangeCap } filter={ filter } filterCap={ filterCap }/>
                { countries ? 
                    <React.Fragment>
                        <DesktopTable filteredCountries={filteredCountries} />
                        <MobileTable  filteredCountries={filteredCountries}/>
                    </React.Fragment> :
                    <div>
                        Data can not be fetched! Please Check your network!
                    </div>
                }
            </Row>
        </Container>
  );
}

export default App;

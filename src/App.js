import './App.css';
import React,{useEffect, useState } from 'react';
import axios from "axios"
import {Table} from "react-bootstrap"

function App ()
{
    const [data, setData] = useState([])
    useEffect( () =>
    {
        async function fetchData ()
        {
            const {fetchedData} = await axios.get( "https://restcountries.eu/rest/v2/all" )
            setData(fetchedData)
        }
        fetchData()
    } )
    console.log(data)
  return (
    <div className="d-flex justify-content-center align-center">
        <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    </div>
  );
}

export default App;

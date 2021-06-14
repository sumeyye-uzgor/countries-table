import React from "react"
import {Table, Col } from "react-bootstrap"

function MobileTable({filteredCountries})
{
    return (
        <Col xs={ 11 } className="d-block d-sm-none">
            { filteredCountries ? 
                filteredCountries.map(country => (
                    <Table striped bordered hover variant="dark" responsive key={country.numericCode}>
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
                    </Table> )) :
                (<div>There is no result!</div>)
            }
        </Col>
    )
}

export default MobileTable
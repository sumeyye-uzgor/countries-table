import React from "react"
import {Table, Col } from "react-bootstrap"


function DesktopTable ({filteredCountries})
{
    return (
        <Col xs={ 11 } className="d-none d-sm-block">
            {filteredCountries ?
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
                            filteredCountries.map(
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
                </Table> :
                <div>There is no result!</div>
            }
        </Col>
   ) 
}

export default DesktopTable
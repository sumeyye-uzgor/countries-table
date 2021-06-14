import React from "react";
import {Col, Row, InputGroup, FormControl } from "react-bootstrap"

function InputFields ({filter, filterCap, handleChange, handleChangeCap})
{
    return (
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
    )
}

export default InputFields
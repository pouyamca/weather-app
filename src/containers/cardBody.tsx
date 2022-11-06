import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import weatherIcon from '../assets/icons/windy.png'


export const CardBody = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return(


        <>
            <div className='card-body-layout'>
                    <Row className="h-100 p-2">
                        <Col>
                            <div className="h-100 w-75 d-flex align-items-center justify-content-center ">
                                <h1>
                                    -4 C
                                </h1>
                            </div>
                            
                        </Col>
                        
                        <Col>
                            <div className="h-100 w-75 d-flex align-items-center justify-content-center ">
                                 <img src={weatherIcon}  className="h-50 w-50"/> 
                            </div>
                            
                        </Col>

                        <Col>
                            <div className="h-100 w-100 d-flex align-items-center justify-content-center ">
                                <h1>
                                    2022 - 10 - 5
                                </h1>
                            </div>
                            
                        </Col>
                    </Row>
                
            </div>
            
        </>
 
);}

export default CardBody;
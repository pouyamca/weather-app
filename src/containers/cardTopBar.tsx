import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import { useSelector } from 'react-redux';


export const CardTopBar = () => {
    let city = useSelector((state: any) => state.data.city)
    let status = useSelector((state: any) => state.data.currentStatus)


    
    return(


        <>
            <div className='card-top-bar-layout'>
                     <Row>

                        <Col xs={12} md={4}>
                            <div className="mt-3 d-flex align-items-center justify-content-center" >
                                <h4>
                                    {city} 
                                </h4>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                             <div className="d-flex align-items-center justify-content-center" >
                                  <img src={status?.icon}  /> 
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                             <div className="mt-4 d-flex align-items-center justify-content-center" >
                               <h6>
                                    {status?.timer}
                                </h6>
                            </div>

                        </Col>  
                          
                            
                      </Row>     
             </div>
            
        </>
 
);}

export default CardTopBar;
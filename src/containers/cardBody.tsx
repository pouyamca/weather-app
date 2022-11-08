import React, { useEffect, useState } from 'react';
 
import { Button, Col, Row, Stack } from 'react-bootstrap';
i 
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { GetCurrent } from '../store/Actions';
import moment from 'moment';


export const CardBody = () => {
    const dispatch: Dispatch<any> = useDispatch() 
    let cityLat  = useSelector((state: any) => state.data.cityLat)
    let cityLong = useSelector((state: any) => state.data.cityLong)
    let status = useSelector((state: any) => state.data.currentStatus)

   

    useEffect(()=>{ 
            let querytString = '/data/2.5/weather?lat='+cityLat+'&lon='+cityLong+'&units=metric';
            dispatch(GetCurrent(querytString))
     
    },[cityLat, cityLong])


    return(


        <>
            <div className='card-body-layout'>
                    <Row className="h-100 p-2">
                        <Col>
                            <div className="h-100 w-75 d-flex flex-column align-items-center justify-content-center ">
                                <h6 style={{color: 'red'}}>
                                    {status?.temp_max}
                                </h6>
                                <br />
                                <h1> 
                                     {status?.temp}
                                </h1>
                                <br />
                                <h6 style={{color: 'blue'}}>
                                    {status?.temp_min}
                                </h6>
                            </div>
                            
                        </Col>
                        
                        <Col>
                            <div className="h-100 w-75 d-flex  align-items-center justify-content-center ">
                                 <img src={status?.icon}  className=""/> 
                            </div>
                            
                        </Col>

                        <Col>
                            <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center ">
                                <h6>
                                humidity: {status?.humidity}
                                </h6>
                                <h6>
                                wind:   {status?.wind}
                                </h6>
                                <h6>
                                    {status?.timer}
                                </h6>
                            </div>
                            
                        </Col>
                    </Row>
                
            </div>
            
        </>
 
);}

export default CardBody;
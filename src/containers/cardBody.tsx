import React, { useEffect, useState } from 'react';
 
import { Button, Col, Row, Stack } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { GetCurrent } from '../store/Actions';


export const CardBody = () => {
    const dispatch: Dispatch<any> = useDispatch() 
    let cityLat  = useSelector((state: any) => state.data.cityLat)
    let cityLong = useSelector((state: any) => state.data.cityLong)
    let status = useSelector((state: any) => state.data.currentStatus)
    let forecastStatus = useSelector((state: any) => state.data.forecast)
   

    useEffect(()=>{ 
            let querytString = '/data/2.5/weather?lat='+cityLat+'&lon='+cityLong+'&units=metric';
            dispatch(GetCurrent(querytString))
     
    },[cityLat, cityLong])


    return(


        <>
            <div className='card-body-layout'>
                    <Row className="h-100 p-2">
                        <Col  xs={12} md={4}>
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
                        
                        <Col  xs={12} md={4}>
                            <div className="h-100 w-75 d-flex flex-column  align-items-center justify-content-center ">
                                 
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

                        <Col  xs={12} md={4}>
                            <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center ">
                                <h6>
                                    foreacast
                                </h6>
                                <img src={forecastStatus?.icon}  />
                                <h6>
                                     {forecastStatus?.timer}
                                </h6>
                                <h6>
                                   temp:  {forecastStatus?.temp}
                                </h6> 
                                <h6>
                                   humidity: {forecastStatus?.humidity}
                                </h6>
                                <h6>
                                   wind:   {forecastStatus?.wind}
                                </h6>
                                
                            </div>
                            
                        </Col>
                    </Row>
                
            </div>
            
        </>
 
);}

export default CardBody;
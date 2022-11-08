import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import weatherIcon from '../assets/icons/windy.png'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { GetCurrent } from '../store/Actions';
import moment from 'moment';


export const CardBody = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [icon, setIcon] = useState('http://openweathermap.org/img/wn/01d.png')
    const [dates, setDates] = useState<any>('')
    let cityLat  = useSelector((state: any) => state.data.cityLat)
    let cityLong = useSelector((state: any) => state.data.cityLong)
    let status = useSelector((state: any) => state.data.currentStatus)

   

    useEffect(()=>{
 
            //  let temp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit' }).format(status?.dt)
            //   setDates( temp ) 
        

         
         
            //     console.log(status?.weather?.iocn)
                //setIcon('http://openweathermap.org/img/wn/'+status?.weather[0]?.iocn+'.png')
           


       // if(cityLat !== '' && cityLong !== ''){
            let querytString = '/data/2.5/weather?lat='+cityLat+'&lon='+cityLong+'&units=metric';
              dispatch(GetCurrent(querytString))
       // }
        
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
                                    {status?.timer}
                                </h6>
                            </div>
                            
                        </Col>
                    </Row>
                
            </div>
            
        </>
 
);}

export default CardBody;
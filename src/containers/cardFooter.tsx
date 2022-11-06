import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'


export const CardFooter = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return (
 
            <div className='card-footer-layout'>
              
                 <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-secondary">1-1-1</Button>
                        <Button variant="outline-secondary">2-2-2</Button>
                        <Button variant="outline-secondary">3-3-3</Button>
                        <Button variant="outline-secondary">4-4-4</Button>
                        <Button variant="outline-secondary">5-5-5</Button>
                        <Button variant="outline-secondary">6-6-6</Button>
                        <Button variant="outline-secondary">7-7-7</Button>
                </ButtonGroup>
 
            </div>
            
       
 
);
}

export default CardFooter;
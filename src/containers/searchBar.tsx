import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
export const SearchBar = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return(


        <>
            <div className='searchbar-layout'>
                <Button onClick={clickBtn} className='search-icon-btn' >
                 <img src={seasrcIcon} />
                 
                </Button> 
                <input type='text'  className='search-text-input' />
                {/* <Suggest /> */}
            </div>
            
        </>
 
);}

export default SearchBar;
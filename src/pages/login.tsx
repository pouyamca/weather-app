import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import SearchBar from '../containers/searchBar';
import ThemeSwicther from '../containers/themeSwicther';
import WeatherCard from '../containers/WeatherCard';

export const UserLogin = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return(


        <>
            <ThemeSwicther />
            <h2 id='top-title'> Weather App </h2> 
            <SearchBar />
            <WeatherCard />
        </>
 
);}

export default UserLogin;
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/searchBar';
import ThemeSwicther from '../containers/themeSwicther';
import WeatherCard from '../containers/WeatherCard';

export const UserMain = () =>{

return (
  <>
    <ThemeSwicther />
    <h2 id='top-title'> Weather App </h2> 
    <SearchBar />
    <WeatherCard />
  </>
);
}
export default UserMain;
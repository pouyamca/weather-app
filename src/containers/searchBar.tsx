import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useSelector ,useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import DropSuggests from '../compnents/dropSuggets';
import { SearchInCity, SetCityName } from '../store/Actions';

type textEventType = React.ChangeEvent<HTMLInputElement>;
type formChangeType = React.FormEvent<HTMLInputElement>;
type btnEventType = React.MouseEvent<HTMLButtonElement>;

 



export const SearchBar = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [value, setValue] = useState('');
    const [segguestVisibility, setSegguestVisibility] = useState<boolean>(false);

    let cities =  useSelector((state: any) => state.data.cities)
    let cityStatusLoading = useSelector((state: any) => state.data.cityStatusLoading)
    

    const handlerChangeInput = (e: formChangeType) =>{
        
        setValue(e.currentTarget.value)
        if(e.currentTarget.value.length> 0){
            let querytString = '/geo/1.0/direct?q='+ e.currentTarget.value +'&limit=5';
            
              dispatch(SearchInCity(querytString))
        }
       
          setSegguestVisibility(true)
         
    }

    // const clickBtn = () =>{
    //     let querytString = '/geo/1.0/direct?q='+value
    //      dispatch(SearchInCity(querytString))
    // }

    const selectItem = (e:btnEventType, key: string) =>{
        if(cities.length > 0 ){
            let slecetedCity = cities.find(item => {if(item.name === key){ return item}}) 
             dispatch(SetCityName(slecetedCity))
             setSegguestVisibility(false)
        }
       
    }


    return(
 
            <div className='searchbar-wrapper' > 
                <div className='searchbar-layout'>
                    <Button
                        className='search-icon-btn'
                        onChange={handlerChangeInput}
                         >
                     
                        <img src={seasrcIcon} />

                    </Button> 
                    <input type='text'  onChange={handlerChangeInput}  className='search-text-input' />
                    
                </div>
                <DropSuggests visible={segguestVisibility} onLoading={cityStatusLoading} items={cities} onItemClicked={selectItem} />
               
            </div>
        
 
);}

export default SearchBar;
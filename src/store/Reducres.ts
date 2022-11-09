import { configureStore } from '@reduxjs/toolkit'

import { 
    GLOBAL_ERROR_SET,
    GLOBAL_ERROR_CLEAR,
    GET_CURRENT_CITY,
    GET_CURRENT_WEATHER_STATUS,
    GET_CURRENT_WEATHER_STATUS_SUCCESS,
    GET_CURRENT_WEATHER_STATUS_FAILURE,
    GET_FUTURE_WEATHER_STATUS,
    GET_FUTURE_WEATHER_STATUS_SUCCESS,
    GET_FUTURE_WEATHER_STATUS_FAILURE,
    GET_CURRENT_CITY_SUCCESS,
    GET_CURRENT_CITY_FAILUE,
    SET_SELECTED_CITY,
    SET_SELECTED_DATA_FORECAST
} from './Types';

const initialState = {

    forecastStatus:[],  
    forecast: {},
    currentStatus:{},
    currentStatusLoading: false,
    forecastStatusLoading: false,
    cityStatusLoading: false,
    cities: [],
    city: 'Tehran',
    cityLat: '37.6691342',
    cityLong: '38.1468259',
    SnackbarShow: false ,
    errorMessage: ''

}

export const dataReducer = (state = initialState, action:any) => {
switch (action.type) {
    
    case GLOBAL_ERROR_SET: 
        return {
            ...state,
            SnackbarShow: true,
            errorMessage: action.message
        };
    case GLOBAL_ERROR_CLEAR:
        return {
                ...state,
                SnackbarShow: false,
                errorMessage: ''
        };

    case GET_CURRENT_WEATHER_STATUS: 
      return {
              ...state,
              currentStatusLoading: true
            };

    case GET_CURRENT_WEATHER_STATUS_SUCCESS:
        return {
                ...state,
                currentStatusLoading: false,
                currentStatus: action.res 
        };
    case GET_CURRENT_WEATHER_STATUS_FAILURE:
             return {
                    ...state, 
                    currentStatusLoading: false,
                    currentStatus: {} 
            };  
    case GET_FUTURE_WEATHER_STATUS:
            return {
                    ...state,
                    forecastStatusLoading: true,
        
            }; 
    case GET_FUTURE_WEATHER_STATUS_SUCCESS:
            return {
                    ...state,
                    forecastStatusLoading: false,
                    forecastStatus: action.final 
            };
    case GET_FUTURE_WEATHER_STATUS_FAILURE:

            return {
                    ...state,
                    forecastStatusLoading: false 
            };  
    case GET_CURRENT_CITY:
            return {
                    ...state,
                    cityStatusLoading: true,
            };      
    case GET_CURRENT_CITY_SUCCESS:
                return {
                    ...state,
                    cityStatusLoading: false,
                    cities: action.res 
                    };
    case GET_CURRENT_CITY_FAILUE:
            return {
                    ...state,
                    cityStatusLoading: false,
                    cities: []
                    };  
    case SET_SELECTED_CITY:
        return {
                ...state,
                city: action.cityObj.name+'  '+ action.cityObj.country,
                cityLat: action.cityObj.lat,
                cityLong: action.cityObj.lon,
        }; 
     case SET_SELECTED_DATA_FORECAST:
        
                return {
                        ...state,
                        forecast: action.firstObject
                }; 
    default:
           return state
}

}
 
 

const reducer = {
    data: dataReducer
  }
export default configureStore ({reducer});
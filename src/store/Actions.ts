import {  
    GLOBAL_ERROR_SET,
    GLOBAL_ERROR_CLEAR,
    GET_CURRENT_CITY,
    GET_CURRENT_CITY_SUCCESS,
    GET_CURRENT_CITY_FAILUE,
    GET_CURRENT_WEATHER_STATUS,
    GET_CURRENT_WEATHER_STATUS_SUCCESS,
    GET_CURRENT_WEATHER_STATUS_FAILURE,
    GET_FUTURE_WEATHER_STATUS,
    GET_FUTURE_WEATHER_STATUS_SUCCESS,
    GET_FUTURE_WEATHER_STATUS_FAILURE,
    SET_SELECTED_CITY,
    SET_SELECTED_DATA_FORECAST
    
} from './Types';

import {callGetWithQueryString} from '../service/CallGetMethod'
import moment from 'moment';
 
 
export const ErrorHandler = (input: any) =>{
   
        return { type: GLOBAL_ERROR_SET, input };
   
}

 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SearchInCity = (city: string) =>{

    return (dispatch: any) => {
        dispatch({ type:  GET_CURRENT_CITY });
        callGetWithQueryString(city).then(
            res => { 
               
                  if(res.status !== 200) { 
                      dispatch(ErrorHandler(res)) 
                  }else{

                      res = res.data.map(({local_names, ...rest}) => {
                        return rest;
                      });
 
                       dispatch({ type: GET_CURRENT_CITY_SUCCESS, res });
                 }
            },
            error => {
                dispatch({ type: GLOBAL_ERROR_SET, error });
                dispatch({ type: GET_CURRENT_CITY_FAILUE, error });
            }
        );
    }
}

 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const GetCurrent = (city: string) => {
    return (dispatch: any) => {
        dispatch({ type:  GET_CURRENT_WEATHER_STATUS });

        callGetWithQueryString(city).then(
           current => { 
                    if(current.status !== 200) { 
                        dispatch(ErrorHandler(current)) 
                    }else{
                         
                        let ico = current.data?.weather[0].icon
                       
                      
                        let formatted = moment.unix(current.data?.dt).format("MMMM Do YYYY, h:mm:ss a");
                        let res={"temp": current.data.main.temp , "icon": 'http://openweathermap.org/img/wn/'+ico+'.png' ,  "timerUnix": current.data.dt, "timer": formatted, "humidity": current.data.main.humidity,  "temp_min": current.data.main.temp_min, "temp_max": current.data.main.temp_max, "wind": current.data.wind.speed }
                        dispatch({ type: GET_CURRENT_WEATHER_STATUS_SUCCESS, res });
                     }
                
           },
           error => {
              
               dispatch({ type: GLOBAL_ERROR_SET, error });
               dispatch({ type: GET_CURRENT_WEATHER_STATUS_FAILURE, error });
           }
       );
       
       }
}


 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export const GetForecast = (city: string) => {
     return (dispatch: any) => {
         dispatch({ type: GET_FUTURE_WEATHER_STATUS, city });

         callGetWithQueryString(city).then(
            res => {  
                if(res.status !== 200) {  
                    dispatch(ErrorHandler(res)) 
                }else{
                   
                   let tempArr: any[] = res.data.list
                  
                   let final: any[] = []
                     for(let i=0 ; i< tempArr.length; i+=8){
                        let tempObj: any = {}
                        let ico = tempArr[i]?.weather[0].icon

                        tempObj.timerUnix = tempArr[i]?.dt;
                       
                        var arr = tempArr[i]?.dt_txt.match(/^(.{0,11})/g) || [""];  
                        tempObj.timer = arr[0];
                        
                        tempObj.temp = tempArr[i]?.main.temp;
                        tempObj.icon = 'http://openweathermap.org/img/wn/'+ico+'.png'
                        tempObj.humidity = tempArr[i]?.main.humidity;
                        tempObj.temp_min = tempArr[i]?.main.temp_min;
                        tempObj.temp_max = tempArr[i]?.main.temp_max;
                        tempObj.wind = tempArr[i]?.wind.speed;
                        
                          final.push(tempObj)

                    }
                  
                   let firstObject = final[0]
                    dispatch({ type: GET_FUTURE_WEATHER_STATUS_SUCCESS, final });
                    dispatch({ type: SET_SELECTED_DATA_FORECAST, firstObject})
                } 
            },
            error => { 
                dispatch({ type: GLOBAL_ERROR_SET, error }); 
                dispatch({ type: GET_FUTURE_WEATHER_STATUS_FAILURE, error });
            }
        );
        
          
    }
}

 
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SetCityName = (cityObj: {name: string, lat: string, long: string}) => {
    return { type: SET_SELECTED_CITY, cityObj}
}

export const forecastSelectedItem = (firstObject: {}) => {
    return { type: SET_SELECTED_DATA_FORECAST, firstObject}
}

export const ShowSnackbar = (message: any) => {
    return { type: GLOBAL_ERROR_SET, message } 
     
  };
  
export const ClearSnackbar = () => {
    return { type: GLOBAL_ERROR_CLEAR } 
  };
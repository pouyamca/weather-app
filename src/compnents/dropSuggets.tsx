import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'


type checkBoxEventType = React.ChangeEvent<HTMLInputElement>;
type btnEventType = React.MouseEvent<HTMLButtonElement>;
type textEventType = React.ChangeEvent<HTMLInputElement>;

export type SuggestedItem = {
    key: string
    name: string
}

export type DropSuggestsPropType ={
    visible: boolean 
    onLoading: boolean
    items: SuggestedItem[]
    onItemClicked: (e: btnEventType, key: string) => void
}


export const DropSuggests = (props: DropSuggestsPropType) => {
     if( !props.onLoading   && !props.visible){
        return <></>
     }else if(props.visible && props.onLoading){
         return  ( 
                <div className="inside">
                     <h6>
                        loading ... 
                     </h6>
                </div>     
            ) 
     }else{
        return(
    
            <div className="inside">
                {props.items.map((item: any)=>{
                        return  ( 
                            <button 
                                    type="button" 
                                    className="btn btn-light customItem" 
                                    key={item.key} 
                                    onClick={(e: btnEventType) =>  props.onItemClicked(e, item.name)} > 


                                    {item.name + '  ' + item.country} 
                            
                            </button> 
                        )
                    })
                }
            </div>
                
        );
        }


}

export default DropSuggests;
import React from 'react'; 
import { Color } from '../form/form';


export default function PrintResult(props: Color) {
   
   //hämta värdet från formuläret 
   let userStyling = props.color;

        return(
            <>
                <h1 className={userStyling}>Welcome</h1>
            </>
        );


}
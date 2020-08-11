import React from 'react'; 
import { UserStyling } from '../form/form';
import './Printresult.css'; 


export default function PrintResult(props: UserStyling) {
   
   //hämta värdet från formuläret 
   let userColor = props.color;
   let userFont = props.fontStyle;
   let userSize = props.fontSize; 

        return(
            <>
                <h1 className={userColor} style={{ fontSize: `${userSize}pt`, fontFamily: `${userFont}` }}>Welcome</h1>
            </>
        );


}
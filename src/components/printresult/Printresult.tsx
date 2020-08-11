import React from 'react'; 
import { UserStyling } from '../form/form';
import './Printresult.css'; 


export default function PrintResult(props: UserStyling) {
   
   //hämta värdet från formuläret 
   let userStyling = props.color;

        return(
            <>
                <h1 className={userStyling}>Welcome</h1>
            </>
        );


}
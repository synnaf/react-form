import React, { useState } from 'react';
import Form, { Color } from '../form/form';
import PrintResult from '../printresult/Printresult';


export default function StyleForm() {

    //vill vi använda useReducer här istället? 
    const [title, setTitle] = useState(''); 

//här hämtar vi saker från form 
//och vi skickar info till prinresult 

//vad ska handleChange göra? den ska sätta statet för styleform? 
function handleChange(e: any) {
    setTitle(e.target.value); 
}

    return(
        <>
            <Form styleChange={handleChange}></Form>
            {/* vad är det vi vill skicka med här?  */}
            {/* är det här vi vill skicka resultatet av vår state change?? value={value from event} */}
            <PrintResult color={title}></PrintResult> 
        </>
    );
}
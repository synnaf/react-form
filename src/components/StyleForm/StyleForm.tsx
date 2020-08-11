import React, { ChangeEvent, useReducer } from 'react';
import Form from '../form/form';
import PrintResult from '../printresult/Printresult';


export default function StyleForm() {
let defaultValue = {
    color: '',
    fontstyle: '',
    fontsize: ''
};  

//vill vi använda useReducer här istället? 
const [title, setTitle] = useReducer(
    (state: any, newState: any) => ({...state, ...newState}), defaultValue
); 

//vad ska handleChange göra? den ska sätta statet för styleform? 
function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let t = e.target.name;
    let value = e.target.value; 

    setTitle({[t]: value} as any);
    console.log(t, value); 
    console.log(title); // den uppdaterar, den läger inte till?  
}

    return(
        <>
            <Form styleChange={handleChange}></Form>
            <PrintResult color={title.color} fontSize={title.fontsize} fontStyle={title.fontstyle}></PrintResult> 
        </>
    );
}
import React, { ChangeEvent, useReducer } from 'react'; 

// export interface Font {
//     fontStyle: string; 
//     fontSize: number; 
// }
// export interface Color {
//     color: string;
// }


export interface UserStyling {
    fontStyle: string; 
    fontSize: number; 
    color: string;
}


export default function Form(props: any) {

    // korrekt användning av useReducer för stylingen? 
    let defaultStyling: UserStyling = {
        fontStyle: '',  
        fontSize:0,
        color:''
    }; 

    const [stylingValue, setStylingValue] = 
    useReducer((styleState: UserStyling, newStyle: UserStyling) => 
        ({...styleState, ...newStyle}), defaultStyling); 

    function updateStyling(e: ChangeEvent<any>) {
        let name = e.target.name; 
        let value = e.target.value; 
        setStylingValue( {[name]: value} as any); 
    }


    return(
        <>
            <form onChange={props.styleChange}>
                <select value={stylingValue.color} onChange={updateStyling} name="color">
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Mint</option>
                </select>
                <select value={stylingValue.fontStyle} onChange={updateStyling} name="font">
                    <option>sans-serif</option>
                    <option>cursive</option>
                    <option>serif</option>
                </select>
                <select value={stylingValue.fontSize} onChange={updateStyling} name="fontsize">
                    <option>12</option>
                    <option>18</option>
                    <option>32</option>
                </select>
            </form>
        </>
    ); 
}
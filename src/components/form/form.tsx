import React, { ChangeEvent, useReducer } from 'react'; 
import { prependOnceListener } from 'process';

export interface Font {
    fontStyle: string; 
    fontSize: number; 
}
export interface Color {
    color: string;
}


export default function Form(props: any) {

    let defaultColor: Color = {
        color:''
    }; 
    let defaultFont: Font = {
        fontStyle: '',  
        fontSize:0
    }; 

    const [colorValue, setColorValue] = 
        useReducer((colorState: Color, newColor: Color) => 
            ({...colorState, ...newColor}), defaultColor); 

    const [fontValue, setFontValue] = 
    useReducer((fontState: Font, newFont: Font) => 
        ({...fontState, ...newFont}), defaultFont); 

    function updateColor(e: ChangeEvent<any>) {
        let name = e.target.name; 
        let value = e.target.value; 
        setColorValue( {[name]: value} as any); 
    }
    function updateFont(e: ChangeEvent<any>) {
        let name = e.target.name; 
        let value = e.target.value; 
        setFontValue( {[name]: value} as any); 
    }

    return(
        <>
            <form onChange={props.styleChange}>
                <select value={colorValue.color} onChange={updateColor} name="color">
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Mint</option>
                </select>
                <select value={fontValue.fontStyle} onChange={updateFont} name="font">
                    <option>Times</option>
                    <option>Verdana</option>
                    <option>mm</option>
                </select>
            </form>
        </>
    ); 
}
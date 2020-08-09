import React, { ChangeEvent, useReducer } from 'react'; 

export interface IColors {
    color: string; 
}

export default function Form() {
    let defaultColor: IColors = {
        color:''
    }; 

    const [colorValue, setColorValue] = 
        useReducer((colorState: IColors, newColor: IColors) => 
            ({...colorState, ...newColor}), defaultColor); 

    function updateColor(e: ChangeEvent<any>) {
        let name = e.target.name; 
        let value = e.target.value; 
        setColorValue( {[name]: value} as any); 
    }

    return(
        <>
            <form>
                <select value={colorValue.color} onChange={updateColor} name="color">
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Mint</option>
                </select>
            </form>
            <div>
                <p>{colorValue.color}</p>
            </div>
        </>
    ); 
}
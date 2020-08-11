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

    // let defaultColor: Color = {
    //     color:''
    // }; 
    // let defaultFont: Font = {
    //     fontStyle: '',  
    //     fontSize:0
    // };     

    // const [colorValue, setColorValue] = 
    //     useReducer((colorState: Color, newColor: Color) => 
    //         ({...colorState, ...newColor}), defaultColor); 

    // const [fontValue, setFontValue] = 
    // useReducer((fontState: Font, newFont: Font) => 
    //     ({...fontState, ...newFont}), defaultFont); 

    // function updateColor(e: ChangeEvent<any>) {
    //     let name = e.target.name; 
    //     let value = e.target.value; 
    //     setColorValue( {[name]: value} as any); 
    // }
    // function updateFont(e: ChangeEvent<any>) {
    //     let name = e.target.name; 
    //     let value = e.target.value; 
    //     setFontValue( {[name]: value} as any); 
    // }

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
            {/* <form onChange={props.styleChange}>
                <select value={colorValue.color} onChange={updateColor} name="color">
                    <option>Pk</option>
                    <option>Be</option>
                    <option>Mt</option>
                </select>
                <select value={fontValue.fontStyle} onChange={updateFont} name="font">
                    <option>T</option>
                    <option>V</option>
                    <option>m</option>
                </select>
            </form> */}


            <form onChange={props.styleChange}>
                <select value={stylingValue.color} onChange={updateStyling} name="color">
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Mint</option>
                </select>
                <select value={stylingValue.fontStyle} onChange={updateStyling} name="font">
                    <option>Times</option>
                    <option>Verdana</option>
                    <option>Robotic</option>
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
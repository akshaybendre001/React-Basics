import React from 'react';

function Styling()
{

    const mystyle ={
        color:"red",
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "Arial"

    };

    return(
        <>
        <div>
            <h1 style={{color: "red"}}>Hello React Styling..</h1>
            <h2 style={{backgroundColor: "blue"}} > Here I have a backgroundColor color</h2>
            <h3 style={mystyle}>This is a styling through an object..</h3>
        </div>
        </>
    );
}
export default Styling;


// Camelcased property why? and how it is used?

//since the inline css is written in javascript object, properties with two names like background-color, must be written with camel case syntax

//background-color: "blue" ==== {{backgroundColor: "blue"}}

//can also create a styling object and refer it to the inline styling..

// .module.css we use it for components that are placed in separate files.. 
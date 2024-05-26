import React from 'react';

function EventHandlers()
{

    function eeu()
    {
        alert("Hello this is Event handling in React!")

    }
    return(
        <>
        <button onClick={eeu}>Click me!</button>
        
        </>
    );
}
export default EventHandlers;

//Event handlers in react is same as in html dom
//onClick()
//onload()
//addEventListener()
//event(queue)
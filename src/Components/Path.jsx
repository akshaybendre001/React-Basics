import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Router} from 'react-router-dom';
function Path()
{
    return(
        
        <>
        <h1>React Router</h1>
        <Router>
            <Route path="/" element={<div>I am Home Page</div>}/>

            <Route path="/contact" element={<div>I am Contact Page</div>}/>

            <Route path="/about" element={<div>I am About Page</div>}/>

            <Route path="/careers" element={<div>I am Career Page</div>}/>

            
        </Router>
        
        </>
        
        
    );
}

export default Path;

//this will not wok until i have home, contact, about and careers page

//React router is a standard library for routing in React..
//process of navigating in a single page application without triggering a full page reload..

//Components are rendered without reloaing in a single page application..

//Route
//Routes
//BrowserRouter

// slash "/" forward slash means by default keep me in the homepage..

// forward slash can be used as an alternative for the end-tag..
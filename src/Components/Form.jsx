import React from 'react';

function Form()
{
    return(
        <>
        <h1>Signup Form</h1>
        <form>
          <label>First Name:</label>  
          <input type="text"></input><br></br>
          
          <label>Last Name:</label>
          <input type="text"></input><br></br>


        </form>
        
        </>
    );
}

export default Form;


//form is basically when we sign in on any platform we get a signup form 
//which contains buttons functions, etc
// basically handling the form means without refreshing the form activities should be done..
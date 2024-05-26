import React,{useState} from 'react';

function Conditional()
{

    const [LoggedIn, setLoggedIn] = useState();    //dont forget the square brackets

    if(LoggedIn)
        {
            return(
            <>
            <mark>Welcome To your feed, Vishwas!!</mark>
            </>
            );
        }

        else
        {
            return(
            <>
            <mark>Welcome To React, Please log in...</mark>
            </>
            );
        }

}
export default Conditional;

//useState(true) == gives if statement

//useState(false) == gives else statement
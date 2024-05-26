import React, {useState} from 'react';

function Conditional1()
{


    const [LoggingIn, LogginInDone] = useState();

    return(
        <>
        {/* {LoggingIn?<h1>Welcome User1</h1>:<h1>Please log in..</h1>} */}

        {LoggingIn=="first"?<h1>User1 </h1>:LoggingIn=="second"?<h1>User2</h1>:<h1>User3</h1>}
        </>
    )

}

export default Conditional1;

//{LoggingIn==1?<h1>User1</h1>:LoggingIn==2?<h1>User2</h1>:<h1>User3</h1>}

//if the state is not given it will take the last state by default..

//ternary operater is preferred in the conditional rendering in react
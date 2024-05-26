import React,{useState} from 'react';

function Conditional2()
{

    const [log, setLog] = useState(6);
    
    if(log>=1 && log<=4)
        {
            return(
                <>
                <h1><mark>Hello user1</mark></h1>
                </>

            );
        }

        else{
            return(
                <>
                <h1><mark>Hello User2</mark></h1>
                </>
            )
        }
}
export default Conditional2;

//curcuit condition && works like if the first condition is true it will not execute second condition
//if the second condition is true it will execute second condition

// if both conditions are false it will move to else statement or in the last statement in the ternaryy operator

// in jsx we can write tag in a tag
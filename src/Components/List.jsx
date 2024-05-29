import React from 'react';

 function List()
{
    const Ipl = ["Mi", "Csk", "Rcb"];

    const result = Ipl.map((Ipl, index)=><h1 key={index}>{Ipl} index is {index}</h1>)

    return(
        <>
        <h1>List Sorted:</h1>
        <h1>{result}</h1>

        </>
    );
}

export default List;

//working of list..

//list1 = ["Mi", "Csk", "Rcb"]
//list2 = ["Mi", "Csk", "Rcb", "Srh"]

//virtual dom
//key helps which elements are Changed, added etc in the list and key should be unique..
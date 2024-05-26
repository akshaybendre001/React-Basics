import React from "react";

function First() {
  
    let p = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "User 1",
        age: "56",
      }),
    });

    p.then((res) => res.json()).then((data) => {
      console.log(data);
      
    });
   

  return (
    <>
      <h1>Hello React</h1>
      
    </>
  );
}

export default First;
//what is strict mode in react app?
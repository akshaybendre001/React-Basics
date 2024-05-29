let p = new Promise((resolve, reject) => {  // Use parentheses instead of curly braces
    var okay = 1;
    if (okay === 1) {  // Change the condition to match the value of 'okay'
        resolve("I am resolved");
    } else {
        reject("err");
    }
});

p.then((message) => {  // Pass a function to 'then'
    console.log(message);  // Handle the resolved value
}).catch((error) => {  // Pass a function to 'catch'
    console.log(error);  // Handle the rejected value
});

import React from 'react';

// function lowercase same name as component/file name

// arrow function
const person = (props) => {  
    // return <p>im a random person, and i am {Math.floor(Math.random()*30)} years old</p>
    
    return (
        <div>
            <p>i am {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
        )
};

export default person;

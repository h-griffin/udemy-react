import React from 'react';

import './Person.css';

// function lowercase same name as component/file name

// arrow function

// pass click handler to component
// stateless component - does not manage state
const person = (props) => {  
    // return <p>im a random person, and i am {Math.floor(Math.random()*30)} years old</p>
    
    return (
        <div className='Person'>
            <p onClick={props.click}>i am {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
        )
};

export default person;

import React from 'react';
import Radium from 'radium';

import './Person.css';

// function lowercase same name as component/file name

// arrow function

// pass click handler to component
// stateless component - does not manage state
const person = (props) => {  
    const style = {
        '@media (min-width : 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person' style={style}> 
            <p>i am {props.name} and i am {props.age} years old</p>
            <p onClick={props.click}> delete </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
        )
};

export default Radium(person);

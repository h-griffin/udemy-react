import React from 'react';

import classes from './Person.css'; //css modules
// import './Person.css';


const person = (props) => {  

    return (
        
        <div className={classes.Person}> 
            <p>i am {props.name} and i am {props.age} years old</p>
            <p onClick={props.click}> delete </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>

        )
};

export default person;


import React from 'react';
import styled from 'styled-components';

import classes from './Person.css'; //css modules
// import './Person.css';


const person = (props) => {  
    // const rnd = Math.random();

    // if ( rnd > 0.7 ){
    //     throw new Error(' something went wrong' );
    // }

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

// notes

// function lowercase same name as component/file name

// arrow function

// pass click handler to component
// stateless component - does not manage state
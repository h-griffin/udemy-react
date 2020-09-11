import React from 'react';
import styled from 'styled-components';

import classes from './Person.css';

// import './Person.css';

//styles from 'Person.css'
const StyledDiv = styled.div`
            width: 30%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
        
            @media (min-width: 500px) {
                width:450px;
            }`

const person = (props) => {  
    const style = {
        '@media (min-width : 500px)': {
            width: '450px'
        }
    }

    return (
        
        <div className={classes.Person}> 
            <p>i am {props.name} and i am {props.age} years old</p>
            <p onClick={props.click}> delete </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>


    // <div className='Person' style={style}    
        // <StyledDiv>
        //     <p>i am {props.name} and i am {props.age} years old</p>
        //     <p onClick={props.click}> delete </p>
        //     <p>{props.children}</p>
        //     <input type='text' onChange={props.changed} value={props.name} />
        // </StyledDiv>
        )
};

export default person;

// notes

// function lowercase same name as component/file name

// arrow function

// pass click handler to component
// stateless component - does not manage state
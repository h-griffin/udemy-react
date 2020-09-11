import React, { Component } from 'react';

import classes from './Person.css'; //css modules
// import './Person.css';


class Person extends Component {  
    render(){
        console.log('[person.js] rendering...')

        return (
            
            <div className={classes.Person}> 
                <p>i am {this.props.name} and i am {this.props.age} years old</p>
                <p onClick={this.props.click}> delete </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </div>
    
        );
    }

};

export default Person;


// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './Person.css';
import classes from './Person.css'; //css modules
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';



class Person extends Component {  

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // executes after render, input element is already set
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[person.js] rendering...')

        return ( // return array of elements
            
        <Aux>
            {this.context.authenticated ? <p>authenticated</p> : <p>please log in</p>}

            
            <p>i am {this.props.name} and i am {this.props.age} years old</p>
            <p onClick={this.props.click}> delete </p>
            <p>{this.props.children}</p>
            <input 
                // ref={ (inputEl) => {this.inputElement = inputEl}} //cant use in func comp
                ref={this.inputElementRef}
                type='text' 
                onChange={this.props.changed} 
                value={this.props.name} />
        </ Aux> 
        );
    }

};

Person.propTypes = {
    click: PropTypes.func, //expect pointer to function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func, 
};

export default withClass(Person, classes.Person);

// return ( // return array of elements
            
//     <Fragment>
//         <p>i am {this.props.name} and i am {this.props.age} years old</p>
//         <p onClick={this.props.click}> delete </p>
//         <p>{this.props.children}</p>
//         <input 
//             type='text' 
//             onChange={this.props.changed} 
//             value={this.props.name} />
//     </ Fragment> 
//     );

// return [ // return array of elements
            
//     // <div className={classes.Person}> 
//         <p key='all'>i am {this.props.name} and i am {this.props.age} years old</p>
//         ,<p key='these' onClick={this.props.click}> delete </p>
//         ,<p key='are'>{this.props.children}</p>
//         ,<input 
//             key='unique' 
//             type='text' 
//             onChange={this.props.changed} 
//             value={this.props.name} />
//     // </div>
// ];
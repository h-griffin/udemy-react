// APP WITH CLASS BASED COMPONENTS

//APP WITH DYNAMIC PERSONS DISPLAY

import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person'

// stateful component - manages state
class App extends Component {
    state = {
        persons: [
            { id: 'all', name:'griffin', age:18 },
            { id: 'these', name:'bryce', age:22 },
            { id: 'unique', name:'hunter', age:22 },
        ],
        otherState: 'some other state value not touched by persons',
        showPersons: false,
    }


    nameChangedHandler = ( event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id; //return bool
        });

        const person = { // safely copy obj with spread
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;      // update copy

        this.setState( { persons : persons} );
    }
    
    togglePersonsHandler = () => {
        // arrow function to property to make method that can use 'this'
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow });   // ! converts to opposite
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // persons.splice(personIndex, 1);           // bad practice, unpredictable

        // const persons = this.state.persons.slice();   // splice makes copy safe to manipulate

        const persons = [...this.state.persons]; // new array with obj from old 
        persons.splice(personIndex, 1); 
        this.setState( { persons : persons } );
    }

    render() {
        // BUTTON -- 'inline' style css must be written in javascript
        const style ={
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black',
            } // sudo selectors supported only because of radium
        }

        // dynamic toggle
        let persons = null; 
        
        if ( this.state.showPersons ) {
            persons= (
                <div>                    
                    {this.state.persons.map( (person, index) => {
                        //output state list with map
                        return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                    })}
                </div>
            );

            //dynamic style changes overide 
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black',
            }

        }

        //dynamic styles

        // let classes = ['red', 'bold'].join(' ');
        const classes =[];

        if (this.state.persons.length <= 2){
            classes.push('red');    // classes =['red']
        }

        if(this.state.persons.length <= 1){
            classes.push('bold');   // classes = ['red', 'bold']
        }

        // style root needed for media query not sudo selector
        return (
            <StyleRoot>
                <div className="App">
                    <h1>hello, world!</h1>
                    <p className={classes.join(' ')}>click toggle to show persons, delete or change names dynamically</p>

                    <button 
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>  
        
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App); // higher order component


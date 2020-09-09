// APP WITH CLASS BASED COMPONENTS

//APP WITH DYNAMIC PERSONS DISPLAY

import React, { Component } from 'react';

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
        }

        let persons = null; // dynamic toggle
        
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

            style.backgroundColor = 'red';

        }

        return (
            <div className="App">
                <h1>hello, world!</h1>
                <p>click toggle to show persons, delete or change names dynamically</p>

                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>  

                {persons}
            </div>
        );
    }
}

export default App;


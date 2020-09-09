// APP WITH CLASS BASED COMPONENTS

// APP WITH MANUAL PERSONS DISPLAYED
    // error thrown with dynamic delete on manual persons

import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

// stateful component - manages state
class App extends Component {
    state = {
        persons: [
            { id: '', name:'griffin', age:18 },
            { id: '', name:'bryce', age:22 },
            { id: '', name:'hunter', age:22 },
        ],
        otherState: 'some other state value not touched by persons',
        showPersons: false,
    }


    switchNameHandler = (newName) => {
        console.log('switch name was clicked');
        // DONT DO THIS -- this.state.persons[0].name = 'Haley Griffin'
        this.setState({
            persons: [
                { name: newName, age:18 },                  // change name click
                { name:'Bryce Switch Click', age:22 },
                { name:'Hunter Switch Click', age:22 },
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name:'Griffin Change Input', age:18 },
                { name: event.target.value, age:22 },       // change name input
                { name:'Hunter Change Input', age:22 },
            ]
        })
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
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }

        let persons = null;
        
        if ( this.state.showPersons ) {
            persons= (
                <div>
                    
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHandler}     // change name input
                        >im the preferred way to display dynamically (toggle) in if statement (not list)</Person>

                    
                    {this.state.persons.map( (person, index) => {
                        //output state list with map
                        return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        />
                    })}
                </div>
            );

        }

        return (
            <div className="App">
                <h1>hello, world!</h1>
                <p>deleting persons will throw an error for static persons</p>

                <button 
                    style={style}
                    onClick={() => this.switchNameHandler('i switched !! ')}>Switch Name</button>  

                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, "Haley Griffin")} // change name click
                    >change name click(paragraph), manually assigned values</Person>

                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}     // change name input
                    >change name input, manually assigned values</Person>

                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}
                    >click switch name, manually assigned values</Person>

                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>  

                { this.state.showPersons ?              // <<<<< turnary expression check: statement/if
                    <div>
                        <Person 
                            name={this.state.persons[1].name} 
                            age={this.state.persons[1].age}
                            changed={this.nameChangedHandler}     // change name input
                            >i am a turnary toggle person</Person>
                </div> : null                                // << turnary expression : else
                }

                {persons}
            </div>
        );

        //                         element  object  children  text
        // return React.createElement('div',null,'h1','hello world');

        //                                                         h1 elememnt      h1 text       reg text
        // return React.createElement('div',null,React.createElement('h1',null,'hellow world?'),'hello world');

        //           create div                    css                  create h1 child
        // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello world?'),'hello world');
    }
}

export default App;


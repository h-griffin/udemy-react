// APP WITH CLASS BASED COMPONENTS

import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

// stateful component - manages state
class App extends Component {
    state = {
        persons: [
            { name:'griffin', age:18 },
            { name:'bryce', age:22 },
            { name:'hunter', age:22 },
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
                { name:'Bryce Griffin', age:22 },
                { name:'Hunter Williams', age:22 },
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name:'griffin', age:18 },
                { name: event.target.value, age:22 },       // change name input
                { name:'Hunter Williams', age:22 },
            ]
        })
    }
    
    togglePersonsHandler = () => {
        // arrow function to property to make method that can use 'this'
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});   // ! converts to opposite
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

        return (
            <div className="App">
                <h1>hello, world!</h1>
                <p>small stuff</p>

                <button 
                    style={style}
                    onClick={() => this.switchNameHandler('griffin!!')}>Switch Name</button>  

                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, "Haley Griffin")} // change name click
                    >i like music</Person>

                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}     // change name input
                    >i like cars</Person>

                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}
                    >i like games</Person>
                

                <button 
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>  

                { this.state.showPersons ?              // <<<<< turnary expression check: statement/if
                    <div>
                        <Person 
                            name={this.state.persons[1].name} 
                            age={this.state.persons[1].age}
                            changed={this.nameChangedHandler}     // change name input
                            >am i showing yet?</Person>

                        <Person 
                            name={this.state.persons[2].name} 
                            age={this.state.persons[2].age}
                            >can you see me?</Person>
                </div> : null                                // << turnary expression : else
                }

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


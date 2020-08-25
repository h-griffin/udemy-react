import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name:'griffin', age:18 },
            { name:'bryce', age:22 },
            { name:'hunter', age:22 },
        ]
    }

    switchNameHandler = () => {
        console.log('switch name was clicked');
        
    }

    render() {
        return (
            <div className="App">
                <h1>hello, world!</h1>
                <p>small stuff</p>

                <button onClick={this.switchNameHandler}>Switch Name</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>i like music</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>i like cars</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>i like games</Person>
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

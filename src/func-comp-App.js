// APP WITH FUNCTION BASED COMPONENTS

import React, { useState } from 'react';        // hook


import './App.css';
import Person from './Person/Person'

const app = props => {

    //           object       function  
    const [ personsState, setPersonsState ] = useState({     // hook
        persons: [
            { name:'griffin', age:18 },
            { name:'bryce', age:22 },
            { name:'hunter', age:22 },
        ],
        // otherState: 'some other state value not touched by persons'
    });

    const switchNameHandler = () => {           // REPLACES PREVIOUS STATE (no otherState)
        console.log('switch name was clicked');
        setPersonsState({
            persons: [
                { name:'Haley Griffin', age:18 },
                { name:'Bryce Griffin', age:22 },
                { name:'Hunter Williams', age:22 },
            ],
            otherState: personsState.otherState          // <<<
        })
    }

    //       object      function  
    const [otherState, setOtherState] = useState('some other value')
    console.log(personsState, otherState);
    
    return (
        <div className="App">
            <h1>hello, world!</h1>
            <p>small stuff</p>

            <button onClick={switchNameHandler}>Switch Name</button>

            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>i like music</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>i like cars</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>i like games</Person>
        </div>
    );
}

export default app;

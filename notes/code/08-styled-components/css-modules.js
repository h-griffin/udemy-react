
import React, { Component } from 'react';

import classes from './App.css';
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
        const persons = [...this.state.persons]; // new array with obj from old 
        persons.splice(personIndex, 1);     // splice makes copy safe to manipulate
        this.setState( { persons : persons } );
    }

    render() {
        // const style ={
        //     color: 'black',
        // }

        let btnClass= [classes.Button];

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


            btnClass.push(classes.Red);
            // dynamic style changes overide 
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black',
            // }

        }

        //dynamic styles

        // let classes = ['red', 'bold'].join(' ');
        const assignedClasses =[];

        // classes.red pulls class module from css import
        if (this.state.persons.length <= 2){
            assignedClasses.push(classes.red);    // assignedClasses =['red']
        }

        if(this.state.persons.length <= 1){
            assignedClasses.push(classes.bold);   // assignedClasses = ['red', 'bold']
        }

        // style root needed for media query not sudo selector
        return (
            
            <div className={classes.App} >
                <h1>hello, world!</h1>
                <p className={assignedClasses.join(' ')}>click toggle to show persons, delete or change names dynamically</p>

                {/* <StyledButton 
                alt={this.state.showPersons} 
                onClick={this.togglePersonsHandler}>
                    Toggle Persons Styled</StyledButton> */}

                <button
                className={btnClass.join(' ')}
                onClick={this.togglePersonsHandler}>
                    toggle person regular
                </button>
                {persons}

            </div>
            
        );
    }
}

export default App; // higher order component

// .App {
//     text-align: center;
//   }
  
//   .red {
//       color: red;
//   }
  
//   .bold {
//       font-weight: bold;
//   }
  
//   /* classes that also have app class / inside the return div class app */
//   .App Button{
//       background-color: green;
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//   }
  
//   .App Button:hover{
//       background-color: lightgreen;
//       color: black;
//   }
  
//   .App button.Red{
//       background-color: red;
//   }
  
//   .App button.Red:hover{
//       background-color: salmon;
//   }
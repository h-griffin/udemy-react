
import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';


// stateful component - manages state
class App extends Component {

    constructor(props){
        super(props);
        console.log('[app.js] constructor')
        // this.state 

    }
    state = {
        persons: [
            { id: 'all', name:'griffin', age:18 },
            { id: 'these', name:'bryce', age:22 },
            { id: 'unique', name:'hunter', age:22 },
        ],
        otherState: 'some other state value not touched by persons',
        showPersons: false,
    }

    static getDerivedStateFromProps(props, state){
        console.log('[app.js] get derived state from props', props)
        return state;
    }

    componentDidMount(){
        console.log('[app.js] component did mount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[app.js] should component update');
        return true;
        // for preformance improvements
    }

    componentDidUpdate(){
        console.log('[app.js] component did update');
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
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow });   
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]; // new array with obj from old 
        persons.splice(personIndex, 1);     // splice makes copy safe to manipulate
        this.setState( { persons : persons } );
    }

    render() {
        console.log('[app.js] render')

        // dynamic toggle
        let persons = null; 
        
        if (this.state.showPersons) {
            persons = (
              <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
              />
            );
          }
        // style root needed for media query not sudo selector
        return (
            <div className={classes.App}>
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}
              />
              {persons}
            </div>
          );
    }
}

export default App; // higher order component / container, otehr components inside


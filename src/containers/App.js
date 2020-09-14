
import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

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
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    }

    static getDerivedStateFromProps(props, state){
        console.log('[app.js] get derived state from props', props)
        return state;
    }

    componentDidMount(){
        console.log('[app.js] component did mount')
    }

    shouldComponentUpdate(nextProps, nextState){
        // for preformance improvements
        console.log('[app.js] should component update');
        return true;
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

        this.setState((prevsState, props) => {
            //state update that depends on old state
            return { 
                persons : persons, 
                changeCounter: this.state.changeCounter+1 
            }
        });
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

    loginHandler = () => {
        this.setState({authenticated: true})
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
                isAuthenticated={this.state.authenticated}
              />
            );
          }
        
        return (
            <Aux classes={classes.App}>
                <button onClick={() => {
                    this.setState({ showCockpit: false});
                }}>remove cockpit</button>

                <AuthContext.Provider 
                  value ={{
                      authenticated: this.state.authenticated, 
                      login: this.loginHandler,
                }}>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}
                            // login={this.loginHandler}
                        />
                    ) : null }

                    {persons}
                </AuthContext.Provider>
            </Aux>
          );
    }
}

export default withClass(App, classes.App); // higher order component / container, otehr components inside


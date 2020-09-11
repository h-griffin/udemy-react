import React, { Component} from 'react';

import Person from './Person/Person';

// functional component, does not need to manage state

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[persons.js] getderivedstate from props');
    //     return state
    // }
    
    // componentWillReceiveProps(props){
    //     console.log('[persons.js component will receive props', props)
    // }

    shouldComponentUpdate(nextProps, nextState){
        //true or false
        console.log('[persons.js] should component update');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[persons.js] get snapshot before update');
        return { message : 'snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[persons.js] component did update');
        console.log(snapshot);
    }

    render(){
        console.log('[persons.js] rendering...');

        return this.props.persons.map( (person, index) => {
            return (
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        } ); 
    }
    
};

export default Persons;

// import React, { Component} from 'react';
import React, { PureComponent} from 'react';


import Person from './Person/Person';
// import AuthContext from '../../context/auth-context';



// functional component, does not need to manage state

// built in should component update for all props
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[persons.js] getderivedstate from props');
    //     return state
    // }
    
    // componentWillReceiveProps(props){
    //     console.log('[persons.js component will receive props', props)
    // }

    // maually use if only some props will change
    // shouldComponentUpdate(nextProps, nextState){
    //     // for preformance improvements
    //     console.log('[persons.js] should component update');

    //     // dont rerender persons when cockpit is deleted unless persons changes
    //     if (
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked
    //         ) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    //     //rerender always
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[persons.js] get snapshot before update');
        return { message : 'snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[persons.js] component did update');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[person.js] component will unmount')
        // code here for right before component is removed
    }

    render(){
        console.log('[persons.js] rendering...');

        return ( this.props.persons.map( (person, index) => {
                return (
                    <Person 
                        click={() => this.props.clicked(index)}
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        changed={event => this.props.changed(event, person.id)}
                        // isAuth={this.props.isAuthenticated}
                    />
                );
            })
        );
    }
    
};


export default Persons;

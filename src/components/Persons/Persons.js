import React from 'react';

import Person from './Person/Person';

// functional component, does not need to manage state

const persons = (props) => props.persons.map( (person, index) => {
        //output state list with map
        return <Person 
            click={() => props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
            />
    } );

export default persons;

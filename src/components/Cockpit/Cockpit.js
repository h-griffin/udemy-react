import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses =[];
    let btnClass = '';
    btnClass = classes.Red;

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
        assignedClasses.push(classes.red);    // assignedClasses =['red']
    }

    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);   // assignedClasses = ['red', 'bold']
    }
    return(
        <div className={classes.Cockpit}>
            <h1>hello, world!</h1>
                <p className={assignedClasses.join(' ')}>click toggle to show persons, delete or change names dynamically</p>

                <button
                className={btnClass}
                onClick={props.clicked}>
                    toggle person regular
                </button>
        </div>
    );
};

export default cockpit;
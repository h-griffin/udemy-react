import React, { useEffect } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect( () => {
        // every render cycle & update
        console.log('[cockpit.js] use effect');

        // http request..
        setTimeout(() => {
            alert('saved data');
        }, 1000);
    }, [] ); //give array for only change


    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses =[];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

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
            <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>click toggle to show persons, delete or change names dynamically</p>

                <button
                className={btnClass}
                onClick={props.clicked}>
                    toggle person
                </button>
        </div>
    );
};

export default cockpit;

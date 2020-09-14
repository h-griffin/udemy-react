import React, { useEffect, useRef, useContext } from 'react';

import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css'



const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    // toggleBtnRef.current.click(); //error no time to set ref before click is called

    const authContext = useContext(AuthContext);
    console.log(authContext);

    useEffect( () => {

        // every render cycle & update
        console.log('[cockpit.js] use effect');

        // http request..
        // const timer = setTimeout(() => {
        //     alert('saved data');
        // }, 1000);

        //optional return
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer); 
            console.log('[coskpit.js] clean up work use in useEffect')
            // runs before main useeffect function runs but after the first render cycle
        }
    }, [] ); //give array for only change

    useEffect(() => {
        // something to run on the update cycle
        console.log('[cockpit.js] 2nd use effect');

        return () => {
            console.log('[coskpit.js] clean up work use in 2nd useEffect')
        }
    });


    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses =[];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
        assignedClasses.push(classes.red);    // assignedClasses =['red']
    }

    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold);   // assignedClasses = ['red', 'bold']
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>click toggle to show persons, delete or change names dynamically</p>

                <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                    toggle person
                </button>
                
                {/* <AuthContext.Consumer>
                    {context =>
                        <button onClick={context.login}>Log In</button>
                    }
                </AuthContext.Consumer> */}

                <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

//inputs do not change memo saves snapshot

//doesnt need to change everytime parent comp updates
export default React.memo(cockpit);

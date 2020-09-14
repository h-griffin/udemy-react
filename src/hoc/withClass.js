import React from 'react';

// this way start with caps 
// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// lowercase functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>    
    );
}

export default withClass;

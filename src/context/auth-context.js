import React from 'react';


//can be any data type not just obj
const authContext = React.createContext({ 
    authenticated: false,
    login: () => {},
}); 

export default authContext;
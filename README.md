## udemy react app guide

### set up
> $ npm install create-react-app -g
> $ create-react-app udemy-react --scripts-version 1.1.5
> $ npm start

## file structure
**node_modules**
dont touch

**public**
- root folder that gets surfed by web server, holds files to edit
- only one html file
    - div id root : attach react things here to the html page

**src** :react application
- index.js gives access to root div in html
    imports app object from app file
    render one root component (app)
- app.js 


## edits
- app.js - remove app div and say hello world
- remove logo.svg
- clear app.css
app.js remove logo import
- app.js app component
    - component must return one root element (big div)
    - return ( more than one line )
    
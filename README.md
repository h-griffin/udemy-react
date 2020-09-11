## udemy react app guide

# TABLE OF CONTENTS
## 1-2
- [javascript](https://github.com/h-griffin/udemy-javascript)

# 3 -base features and syntax
- [1 custom components](notes/code/01-custom-component)
- [2 state-events](notes/code/02-state-events)
- [3 base syntax finished](notes/code/03-base-syntax-fin)
## notes
- [jsx components](notes/components-jsx.md)
- [props & state](notes/props-state.md)
- [which events can you listen?](notes/events.md)
- [function component naming](component-naming.md)
    ### Useful Resources & Links
    [create-react-app: ](https://github.com/facebookincubator/create-react-app)
    [Introducing JSX: ](https://reactjs.org/docs/introducing-jsx.html)
    [Rendering Elements: ](https://reactjs.org/docs/rendering-elements.html)
    [Components & Props: ](https://reactjs.org/docs/components-and-props.html)
    [Listenable Events: ](https://reactjs.org/docs/events.html)

# 4 -lists and conditionals
- [1 conditional content](notes/code/04-conditional-content)
- [2 lists conditionals](notes/code/05-list-conditionals)
- [3 list con finished](notes/code/06-list-con-fin)
    ### Useful Resources & Links
    [Conditional Rendering:](https://reactjs.org/docs/conditional-rendering.html)
    [Lists & Keys:](https://reactjs.org/docs/lists-and-keys.html)

# 5 -styling components & elements
- [1 radium](notes/code/07-styling-radium)
- [2 styled components](notes/code/08-styled-components)
- [3 styling finished / css modules](notes/code/09-styling-fin-css-modules)
## notes
- [css modules](notes/css-modules.md)
    ### Useful Resources & Links
    [Using CSS Modules in create-react-app Projects:](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)
    [More information about CSS Modules:](https://github.com/css-modules/css-modules)

# 6 -debugging react apps



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


## notes
- app.js app component
    - component must return one root element (big div)
    - return ( more than one line )
- new person folder
    - components capital folders
- add state to class to use change name button
- add button event handler
    - do not use () when referring to event handler, use reference only do not invoke
- function based components with hooks
    - replace state
- class based components modify state
- to use onclick in coponent, pass ref in as prop


> $ npm run eject

**webpack.config.dev.js**
**webpack.config.prod.js**

```
test: /\.css$/,
use: [
    require.resolve('style-loader'),
...
modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]'

```
